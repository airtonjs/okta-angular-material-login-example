import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import OktaAuth from '@okta/okta-auth-js';
import { ConfigOKTA } from './.env.client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authClient = new OktaAuth({ ...ConfigOKTA
  });

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  async checkAuthenticated() {
    const authenticated = await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string) {
    const transaction = await this.authClient.signIn({username, password});

    if (transaction.status !== 'SUCCESS') {
      throw 'We cannot handle the ' + transaction.status + ' status';
    }
    this.isAuthenticated.next(true);

    this.authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }

  async logout(redirect: string) {
    try {
      await this.authClient.signOut();
      this.isAuthenticated.next(false);
      this.router.navigate([redirect]);
    } catch(err) {
      console.error(err);
    };
  }
}

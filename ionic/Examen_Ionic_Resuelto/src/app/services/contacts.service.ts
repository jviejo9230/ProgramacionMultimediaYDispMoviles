import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from 'src/app/models/contact'
import { EMPTY, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private url_service ="https://reqres.in/api/users?page=2"
  public contacts;
  public contact: Contact;


  constructor(private http: HttpClient) { }


/**
 * get_contacts: Method to get list contacts from service
 */
  get_contacts() {
    return this.http.get(this.url_service);
  }
  

}

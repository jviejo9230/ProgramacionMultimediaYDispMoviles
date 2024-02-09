import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.page.html',
  styleUrls: ['./list-contacts.page.scss'],
})
export class ListContactsPage implements OnInit {

public title="Lista de contactos"
public contacts;

  constructor(private _cs: ContactsService,
    private _router:Router) { }

  ngOnInit() {
  }

  // Méthod for refresh renderized:
  ionViewWillEnter() {
    this.get_contacts();
  }

/**
 * Method call to service get_contacts
 */
get_contacts()
{
  this._cs.get_contacts().subscribe(data=>
    {
      this.contacts=data;
      this.contacts=this.contacts.data;
    });
}


/**
 * view_Contact
 * @contact: Contact to view
 */
view_Contact(contact)
{
  this._router.navigate(['/list-contacts/contacts-detail',{contact: JSON.stringify(contact)}]);
}

}

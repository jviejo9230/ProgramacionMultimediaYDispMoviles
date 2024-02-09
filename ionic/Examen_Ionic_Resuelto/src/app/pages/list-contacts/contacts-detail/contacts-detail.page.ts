import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import {Contact} from 'src/app/models/contact'

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.page.html',
  styleUrls: ['./contacts-detail.page.scss'],
})
export class ContactsDetailPage implements OnInit {

  public contact: Contact; 

  constructor(private activatedRouted: ActivatedRoute,
    private _cs: ContactsService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      this.contact =JSON.parse(paramMap.get('contact'));
      console.log(this.contact)    
      })
    }

}

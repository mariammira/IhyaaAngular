import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  COACHES=
    'https://docs.google.com/forms/d/e/1FAIpQLSdr37qmpYZPxqd0mB85W4ArLInshJISZCiFTAZnFcrmNLFKRw/viewform'
  STUDENTS_ORIGINAL=
    'https://docs.google.com/forms/d/e/1FAIpQLSd2zSJAJ2ftsBu0OPRhW6eskDQvzWsy4w8_h03VQ6o0MlDxfg/viewform'
  STUDENTS_OCTOBER=
    'https://docs.google.com/forms/d/e/1FAIpQLSe-1FEaTe8DFYhl37S9GC3Im17ZnIUQke1ZchTqOPLWKHkHwA/viewform'

  constructor() {
    window.addEventListener('scroll', function(){
      var mattoolbar:any = document.querySelector("mat-toolbar");
      mattoolbar.classList.toggle("sticky", window.scrollY > 0);
    }
    )
   }
public tabs=[
  
{title:'تواصل معنا',link:'/contact-us'},
{title:'شاركنا',subtitles:[{title:'مدربين',link:this.COACHES},
                            {title:'مشتركين مدينة نصر',link:this.STUDENTS_ORIGINAL},
                            {title:'مشتركين ٦ أكتوبر',link:this.STUDENTS_OCTOBER}]},
{title:'مجتمعنا',subtitles:[{title:'رؤيتنا',link:'/vision'},{title:'رسالتنا',link:'/mission'}]},
{title:'منهجيتنا',link:'/curriculum'},
{title:'الرئيسية',link:'/'},
]
}

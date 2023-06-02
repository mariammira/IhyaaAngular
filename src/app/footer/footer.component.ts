import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public copyright = `© ${new Date().getFullYear()} by Ihyaa Academy​`;
  public  socialMedia = [
    {
      link: 'https://www.facebook.com/Ihyaa.academy',
      icon: 'faFacebook',
      type: 'facebook',
    },
    {
      link: 'https://www.instagram.com/ihyaa_academy',
      icon: 'faInstagram',
      type: 'instagram',
    },
    {
      link: 'https://www.youtube.com/user/ihyaaacademy',
      icon: 'faYoutube',
      type: 'youtube',
    },
    {
      link: 'https://twitter.com/ihyaa_academy',
      icon: 'faTwitter',
      type: 'twitter',
      enabled: true,
    },
    {
      link: 'https://soundcloud.com/ihyaa-academy',
      icon: 'faSoundcloud',
      type: 'soundcloud',
    },
  ];
}

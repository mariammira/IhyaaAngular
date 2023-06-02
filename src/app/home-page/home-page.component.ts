import { Component } from '@angular/core';
// import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
// import homeCarousel1 from './home-carousel/1';
// import homeCarousel2 from './../../assets/images/home-carousel/2.jpg';
// import homeCarousel3 from './../../assets/images/home-carousel/3.jpg';
// import homeCarousel4 from './../../assets/images/home-carousel/4.jpg';
// import homeCarousel5 from './../../assets/images/home-carousel/5.jpg';
// import homeCarousel6 from './../../assets/images/home-carousel/6.jpg';
// import homeCarousel7 from './../../assets/images/home-carousel/7.jpg';



@Component({
  selector: 'app-home-page',
  
	// standalone: true,
	// imports: [NgbCarouselModule, NgIf],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
   images = [
    './../../assets/images/home-carousel/1.jpg',
    './../../assets/images/home-carousel/2.jpg',
    './../../assets/images/home-carousel/3.jpg',
    './../../assets/images/home-carousel/4.jpg',
    './../../assets/images/home-carousel/5.jpg',
    './../../assets/images/home-carousel/6.jpg',
    './../../assets/images/home-carousel/7.jpg',
    // homeCarousel3,
    // homeCarousel4,
    // homeCarousel5,
    // homeCarousel6,
    // homeCarousel7,
  ];
  // slides = [{'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'},
  //  {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},
  //  {'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'}, 
  //  {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'},
  //   {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];
  cards = [
    {
      title: 'رؤيتنا',
      content: 'أن نصبح مجتمع رائد ومنتج يقوم على قيم ...',
      linkActive: true,
      linkText: 'المزيد',
      linkRoute: '/vision',
    },
    {
      title: 'منهجيتنا',
      content: 'تقوم برامجنا على منهجية العشر مراحل لإعداد إنسان مؤثر ...',
      linkActive: true,
      linkText: 'المزيد',
      linkRoute: '/curriculum',
    },
    {
      title: 'عائلتنا',
      content: 'أكتر قيمة مهمة في إحياء إننا عائلة واحدة...',
      linkActive: false,
      linkText: 'تعرف علينا',
      linkRoute: '/our-members',
    },
    {
      title: 'واحة رَمْق',
      content: 'واحة رَمْق هي بداية حلمنا بمكان بيغطي إحتياجات المجتمع ...',
      linkActive: false,
      linkText: 'إعرف أكتر',
      linkRoute: '/wahet-ramq',
    },
  ];
}

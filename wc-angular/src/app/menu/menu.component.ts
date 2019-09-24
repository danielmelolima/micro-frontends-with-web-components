import { Component, OnInit, OnDestroy } from '@angular/core';
declare const window;

const CHANGE_CATEGORY_EVENT_NAME = 'CHANGE_CATEGORY'
const CHANGE_PHOTO_EVENT_NAME = 'CHANGE_PHOTO'
const INITIAL_CATEGORY = { id: 1, name: 'Animals'}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  public photos: Array<any> = [
    // ANIMALS
    { id: 1, category: 1, title: 'Cat', desc: 'yellow cat, animal, nature, cute, fur, feline, kitten, pet', src: 'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg', views: '20K' },
    { id: 2, category: 1, title: 'Bear', desc: 'brown bear, grizzly, wildlife, water, nature, wild, wet, animal', src: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&w=1000&q=80', views: '1K' },
    { id: 3, category: 1, title: 'Dog', desc: 'dog, light brown, looking, portrait, sitting, animal, pet, cute, fur, nature', src: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg', views: '30K' },
    { id: 4, category: 1, title: 'Tiger', desc: 'wildlife, tiger, feline, cat, wild, stripes, fur, predator', src: 'https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&w=1000&q=80', views: '10K' },
    // FOOD
    { id: 5, category: 2, title: 'Coffe', desc: 'coffee mug, drink, food, espresso, beverage, caffeine, brown', src: 'https://www.roastycoffee.com/wp-content/uploads/caffeine-coffee-800x450.jpg', views: '1K' },
    { id: 6, category: 2, title: 'Pizza', desc: 'pizza, Italy, food, tomato, mozzarella, lunch, cheese, dish, dinner', src: 'http://moinhoglobo.com.br/wp-content/uploads/2019/02/01-massa-pizza.png', views: '20K' },
    { id: 7, category: 2, title: 'Burger', desc: 'sandwich, cheese, food, lettuce, meal, bread, burger', src: 'https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger.jpg', views: '30K' },
    // TOYS
    { id: 8, category: 3, title: 'Tractor', desc: 'sand, toy, tractor, vehicle, machinery, machine, soil, equipment, bulldozer, industry', src: 'http://cdn.shopify.com/s/files/1/2548/0148/products/KT1092WM_6VCatTractor_PD6_1200x630.png?v=1553702102', views: '20K' },
    { id: 9, category: 3, title: 'Balloon', desc: 'balloon, reflection, transparent, design, visuals, art, illustration, fantasy, bright, sphere', src: 'http://www.hobbycraft.co.uk/supplyimages/642621_1000_1_800.jpg', views: '1K' },
    { id: 10, category: 3, title: 'Cars', desc: 'toys, toyshop, car, vehicle, leather, industry, old, chrome, many, nostalgia', src: 'http://www.yourtoysguide.com/wp-content/uploads/2018/01/Car-Toys.jpg', views: '30K' },
    { id: 11, category: 3, title: 'Skateboard', desc: 'skateboard, board, vehicle, old, equipment, street, wood, outdoors, recreation, industry', src: 'https://i.ytimg.com/vi/12-d4Tbs1XU/maxresdefault.jpg', views: '10K' },
    // SPORTS
    { id: 12, category: 4, title: 'Football', desc: 'championship, football, runner, teamwork, uniform, helmet, competition, ball, game, football player', src: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&w=1000&q=80', views: '20K' },
    { id: 13, category: 4, title: 'Golf', desc: 'athlete, childhood, golf, grass, sport, swing, driver, club', src: 'https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2016/11/06/golf-2.jpg', views: '1K' },
    { id: 14, category: 4, title: 'Bowling', desc: 'bowling, competition, recreation, game, sport', src: 'http://www.hogcypruschapter.com/wp-content/uploads/2017/02/bggg.jpg', views: '30K' },
    { id: 15, category: 4, title: 'Tennis', desc: 'ball, network, tennis, tennis court, sport, racket, tournament, game, web, competition', src: 'https://cdn-group.bnpparibas.com/media/cache/share/uploads/image/clay.jpg', views: '10K' },
  ]
  public filteredPhotos: Array<any> = []
  public selectedPhoto = null
  public selectedCategory = null

  ngOnInit() {
    window.addEventListener(CHANGE_CATEGORY_EVENT_NAME, this.changeCategoryListener.bind(this))
    this.changeCategory(INITIAL_CATEGORY)
  }

  ngOnDestroy() {
    window.removeEventListener(CHANGE_CATEGORY_EVENT_NAME, this.changeCategoryListener.bind(this))
  }

  changeCategoryListener({ detail }) {
    this.changeCategory(detail)
  }
  
  changeCategory(category) {
    this.selectedCategory = category
    this.filteredPhotos = this.photos.filter(photo => photo.category === category.id)
    this.filteredPhotos.length > 0 && this.selectPhoto(this.filteredPhotos[0])
  }

  selectPhoto(photo) {
    this.selectedPhoto = photo
    window.dispatchEvent(new CustomEvent(CHANGE_PHOTO_EVENT_NAME, { detail: photo }))
  }
}

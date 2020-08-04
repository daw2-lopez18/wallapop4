import { Component, OnInit, Testability, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';
import { interval } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }  


  wishList(item) { //Add Wish List
    if(this.items[item].whitelist == "false"){
      var test = this.items[item].whitelist = "true";
      var img = document.getElementsByClassName("imgWhitelist")[item];
      var img2 = img.setAttribute("src","./assets/images/favorito.png");
      //console.log(this.items[item]);
      
      

    }else{
      var test = this.items[item].whitelist = "false";
      var img = document.getElementsByClassName("imgWhitelist")[item];
      var img2 = img.setAttribute("src","./assets/images/sinFavorito.png");  
      //console.log(this.items[item]);
    }

  }//End Add Wish List

  remove(i) { //Remove Wish List	  

	  var check = this.items.find( producto => producto.title === i );
	  if(check.whitelist == "true"){
		check.whitelist = "false";
		var img = document.getElementsByClassName("imgWhitelist")[i];
      	var img2 = img.setAttribute("src","./assets/images/sinFavorito.png");
	  }else{
		check.whitelist = "true";
		var img = document.getElementsByClassName("imgWhitelist")[i];
      	var img2 = img.setAttribute("src","./assets/images/favorito.png");
	  }


  }//End Remove Wish List

  filterItems ='';
  wishItems ='';

  items = [
		{
			"title": "iPhone 6S Oro",
			"description": "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
			"price": "740",
			"email": "iphonemail@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/iphone.png",
      		"whitelist": "false"
		},
		{
			"title": "Polaroid 635",
			"description": "Cámara clásica de fotos Polaroid, modelo 635. Las fotos son a super color. Está en perfectas condiciones y es fantástica para coleccionistas. Se necesitan carretes instax 20 para hacer fotos. Tamaño M.",
			"price": "50",
			"email": "cameramail@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/camera.png",
      		"whitelist": "false"
		},
		{
			"title": "Bolso piel marca Hoss",
			"description": "Vendo bolso de piel marrón grande de la marca Hoss. Lo compré hace dos temporadas. Esta en perfectas condiciones, siempre se ha guardado en bolsa de tela para su conservación. Precio original de 400 euros. Lo vendo por 250 porque ya casi no me lo pongo. Tiene varios compartimentos dentro.",
			"price": "250",
			"email": "bagmail@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/bag.png",
      		"whitelist": "false"
		},
		{
			"title": "Reloj de Daniel Wellington",
			"description": "Reloj de la marca Daniel Wellington usado sólo un mes. Ahora me han regalado otro que me gusta más y es muy parecido; por eso lo vendo. Su precio en tienda son 149 pero lo vendo por 100 euros. Es con la esfera blanca y la correa de piel marron. ",
			"price": "100",
			"email": "watchmail@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/watch.png",
      		"whitelist": "false"
		},
		{
			"title": "Coche antiguo americano",
			"description": "Coche antiguo americano de color marrón. Se tiene que cambiar el motor pero aparte de eso todo funciona correctamente. Interior de piel clara. Ideal para coleccionistas",
			"price": "210000",
			"email": "carmail@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/car.png",
      		"whitelist": "false"
		},
		{
			"title": "Barbacoa",
			"description": "Barbacoa en buen estado. La he usado pocas veces y está casi nueva. Ideal para fiestas y celebraciones",
			"price": "120",
			"email": "barbecue@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png",
      		"whitelist": "false"
		},
		{
			"title": "Sofa de piel auténtica",
			"description": "Vendo sofá de piel negro. Tiene signos evidentes de uso, de ahí el precio. Es muy cómodo y bonito",
			"price": "75",
			"email": "sofa@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/sofa.png",
      		"whitelist": "false"
		},
		{
			"title": "Vespa restaurada",
			"description": "Está restaurada y muy cuidada, con piezas originales y repintada una vez de color rojo carmín. Solo acepto ofertas serias",
			"price": "1990",
			"email": "vespa@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/vespa.png",
      		"whitelist": "false"
		},
		{
			"title": "Batidora",
			"description": "Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero",
			"price": "90",
			"email": "mixer@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mixer.png",
      		"whitelist": "false"
		},
		{
			"title": "Mudanzas",
			"description": "Está completamente nueva (no la he sacado de la caja). Me la regalaron pero no la quiero",
			"price": "90",
			"email": "moves@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/moves.png",
      		"whitelist": "false"
		},
		{
			"title": "Lavadora",
			"description": "Vendo lavadora comprada hace 1 año. Me cambio de piso y me urge venderla",
			"price": "250",
			"email": "washer@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/washer.png",
      		"whitelist": "false"
		},
		{
			"title": "TV de 43 pulgadas",
			"description": "Televisor de 43 pulgadas. Funciona perfectamente. No tengo la base. Precio negociable",
			"price": "400",
			"email": "tv@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/tv.png",
      		"whitelist": "false"
		},
		{
			"title": "Piso en Clot",
			"description": "60m2, en pleno mercado del Clot. Piso muy acogedor, reformado. Ideal para parejas",
			"price": "288000",
			"email": "flat@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/flat.png",
      		"whitelist": "false"
		},
		{
			"title": "Tocadiscos vintage",
			"description": "Muy bien cuidado! Regalo los discos de LP que se ve en las fotos",
			"price": "325",
			"email": "turntable@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/turntable.png",
      		"whitelist": "false"
		},
		{
			"title": "Nevera verde",
			"description": "Pequeñita, con un verde Chevrolet, muy de los 60!",
			"price": "125",
			"email": "fridge@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/fridge.png",
      		"whitelist": "false"
		},
		{
			"title": "Cámara réflex",
			"description": "La vendo porque no la uso. No tengo ningún accesorio como la bolsa ni objetivos.",
			"price": "240",
			"email": "analogue@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/analogue.jpg",
      		"whitelist": "false"
		},
		{
			"title": "Clases de piano",
			"description": "Doy clases de piano a particulares. Todas las edades. Llevo más de 20 años tocando el piano.",
			"price": "5",
			"email": "piano@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/piano.jpg",
      		"whitelist": "false"
		},
		{
			"title": "Material de oficina",
			"description": "Vendo mucho material de oficina, como bolígrafos, lápices, post-its, etc. Preguntad para más info",
			"price": "12",
			"email": "pen@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/pen.jpg",
      		"whitelist": "false"
		},
		{
			"title": "Macbook 13 pulgadas",
			"description": "Vendo Macbook porque me han regalado el nuevo. Este está usado pero en buen estado",
			"price": "600",
			"email": "mac@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/mac.jpg",
      		"whitelist": "false"
		},
		{
			"title": "Cascos",
			"description": "Cascos usados. No son muy buenos, pero son bastante bonitos. Precio negociable",
			"price": "20",
			"email": "headphones@wallapop.com",
      		"image": "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/headphones.jpg",
      		"whitelist": "false"
		}
  ]

  ngOnInit(): void {
  }

  get favourites() {
	return this.items.filter( x=> x.whitelist == "true");
  }

  getFavourite(i){
	console.log(i);
	var favorito = this.items[i].whitelist;
	if(favorito == "true"){
		var img = document.getElementsByClassName("imgWhitelist")[i];
    	var img2 = img.setAttribute("src","./assets/images/favorito.png");
	}
 
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex +1
  }

  page_size: number = 5
  page_number: number = 1
  pageSizeOptions = [5]

}

import { Injectable } from '@angular/core';
import { config } from 'src/config';
import { Meta } from '@angular/platform-browser';  

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(
    private meta: Meta
  ) { }

  share(url: string, media: string, content: any) {
    url = url.replace('%', '%25')    
    config.url = config.url.replace('#', '%23')
    this.meta.removeTag("property='og:url'")!;
    this.meta.removeTag("property='og:title'")!;
    this.meta.removeTag("property='og:description'")!;
    this.meta.removeTag("property='og:image'")!;
    let fullUrl = ''
      if(media == 'fb') {
        fullUrl = "https://www.facebook.com/sharer/sharer.php?u=" + config.url + url
      } else if (media == 'wp') {
        fullUrl = "https://api.whatsapp.com/send?text=" + config.url + url
      } else if (media == 'tw') {
        fullUrl = "https://twitter.com/intent/tweet?text=" + config.url + url
      }
    setTimeout(() => {   
      this.meta.updateTag({ name: 'og:url', content: config.url + url })
      this.meta.updateTag({ name: 'og:title', content: content.titulo + ' | Valle de la Mentefactura' })
      this.meta.updateTag({ name: 'og:description', content: content.contenido.replace(/<[^>]+>/g, '').substring(0,50) })
      this.meta.updateTag({ name: 'og:image', content: content.imagen_url })
    }, 500) 
    console.log(fullUrl);
    
    window.open(fullUrl, '_blank');
  }
}

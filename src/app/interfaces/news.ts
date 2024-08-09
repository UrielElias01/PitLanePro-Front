import { SafeHtml } from '@angular/platform-browser';

export interface News {
  title: SafeHtml;
  content: SafeHtml;
  imageUrl: string;
}
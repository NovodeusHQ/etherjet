import { StaticImageData } from 'next/image';

export interface ICaseStudy {
  id: number;
  title: string;
  imageUrl: string | StaticImageData;
  url: string;
  comingSoon?: boolean;
}

export interface IReview {
  id: number | string | undefined;
  title: string;
  quote: string;
  imageUrl: string | StaticImageData;
  name: string;
  role: string;
  stars: boolean;
}

export interface ICheckboxes {
  id: string,
  name: string,
  checked: boolean,
  label: string,
}
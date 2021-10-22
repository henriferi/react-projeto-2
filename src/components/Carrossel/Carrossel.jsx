import React from "react";
import "./Style.css";
import ImageGallery from 'react-image-gallery';


export default function Carrossel() {
    const images = [
        {
          original: 'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg',
          thumbnail: 'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg',
        },
        {
          original: 'https://catracalivre.com.br/wp-content/thumbnails/UpClSTyK1Ytj2hEejDy-ZXclLKI=/wp-content/uploads/2020/03/brown-and-white-dog-4633734-1920-910x607.jpg',
          thumbnail: 'https://catracalivre.com.br/wp-content/thumbnails/UpClSTyK1Ytj2hEejDy-ZXclLKI=/wp-content/uploads/2020/03/brown-and-white-dog-4633734-1920-910x607.jpg',
        },
        {
            original: 'https://super.abril.com.br/wp-content/uploads/2017/06/de-onde-veio-a-expressc3a3o-cor-de-burro-quando-foge.png',
            thumbnail: 'https://super.abril.com.br/wp-content/uploads/2017/06/de-onde-veio-a-expressc3a3o-cor-de-burro-quando-foge.png',
          },
          {
            original: 'https://exame.com/wp-content/uploads/2021/02/GettyImages-1149947037-1.jpg',
            thumbnail: 'https://exame.com/wp-content/uploads/2021/02/GettyImages-1149947037-1.jpg',
          }, 
      ];
    return(
        <>
            <ImageGallery items={images} />;
        </>
    );
}

import { useState } from "react";

//* Component Import
import Header from '../../components/Header';

//* Photo Gallery Package
import PhotoAlbum from "react-photo-album";

//* Import Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const MediaGallery = () => {

  const [index, setIndex] = useState(-1);

  const photos = [
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20210109_173653149-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20211127_142807035-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20211206_140333876-05.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_204538208-03.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20211228_145549575-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220213_014325980.PORTRAIT-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220223_145408512-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220223_191643253-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220223_194919171-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220315_200004961-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_185626173-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220624_121926875-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220808_133447235-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_192802057-04.jpeg", width: 3024, height: 4032},
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220924_020411721-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230111_174355296-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230113_205154483-02.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230114_201026883-01.jpeg", width: 3024, height: 4032},
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230115_141126740-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230118_164014851-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230327_161711677-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230408_174110018-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230409_000547783-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230409_185220636-01.jpeg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230419_185820452-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230421_165124818-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20230422_164755640-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/20160124_111209-01.jpeg", width: 1648, height: 927 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/20160922_192639-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_0586.jpg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_0607.jpg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_1101.JPG", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_1350_700-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_1364.JPG", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20150124_075203-EFFECTS.jpg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20170212_124339-PANO.jpg", width: 7680, height: 1792 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20170222_152159_245.jpg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20180331_112950.jpg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20180331_145959.jpg", width: 3024, height: 4032 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20180405_125218_729.jpg", width: 927, height: 927 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20191019_053348-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/IMG_20191019_071542-01.jpeg", width: 3024, height: 4032},
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PXL_20220118_153625058-01.jpeg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/Pallisade Ice.jpg", width: 4032, height: 3024 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/PANO_20180113_103234.jpg", width: 7680, height: 1792 },
    { src: "https://portfolio-site-picture-gallery.s3.us-west-1.amazonaws.com/Woodz_Selfie.jpeg", width: 4032, height: 3024 }
  ];


  return (

    <div className="min-vh-100 divMain">

      <header className="w-100">
        <Header />
      </header>

      <div className='HeaderPhotoSpacer' >
        <PhotoAlbum layout="rows" photos={photos} padding="25" targetRowHeight={350} onClick={({ index }) => setIndex(index)}/>

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
      

    </div>

  )

}

export default MediaGallery;


//!========================= EOF =========================
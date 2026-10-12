import Gallery from "./Gallery";

const images = [
  {
    src: "https://i.postimg.cc/tgBNfbty/111-1.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/R0YnKZL3/1.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/rsBDRR8g/10834954-10206330521285763-6184217903086276626-o.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/fRx9XCSd/10887539-10206330522205786-1238609198720201270-o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },

  {
    src: "https://i.postimg.cc/9QR2zX0g/111-4.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/s2jvWrrF/11143670-10207275578191595-7512443364279691364-n.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/pTZb3pcr/11667487-10207275579351624-7460528728818443038-n.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/ZRJXPJYS/111-3.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/CdpKxyNQ/117334191-10223831811367077-3152060630554402852-n.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/8CSYDT66/11794152-10207541558520937-5047892413255096173-o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/3N4ywFHd/12309621-10208370163835552-5080544844904441899-o.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/VLPnK5Qn/12314328-10208370172195761-5563381157124961534-o.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/VvqSxBQM/12357161-10208370163035532-2832952439937043182-o.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/FsxdGZxX/12365918-10208370161715499-7391465516667732101-o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/vTsTtggm/1239118-10202051323668497-424507293-o-1.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/QxFwJ4DH/13029583-10209492818621220-1071456875052633868-o.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/3R7QLgBz/13047800-10209492839501742-6466548589556272736-o.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/Fz5dCCqN/13048139-10209492822101307-8507783512887882684-o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/hGWkj9Hh/13055882-10209492829581494-2886277141064756229-o.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/Wp5cnqJf/13063407-10209492820021255-2855593116679017277-o.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/13P03Xvs/13071871-10209492811621045-4468679348130649450-o.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/XqsWBp9m/13071930-10209492803980854-1203715621672107311-o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/HkxxzCxb/13072625-10209492827941453-2236102415998604922-o.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/mkLRrQ17/13072769-10209492810301012-7056301093612148964-o.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/dVt7fyWk/13086741-10209492770900027-1756434494154543500-o.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/MHQ0vQkK/1402162-10202772243531043-368077952-o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/4NnkF464/14917172_10211221889326907_7917156480019083614_o.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/QtPk8qyy/1495900_10206330523885828_1675923897642691771_o.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/NMTLX70V/1496261_10203101977894196_1887382469_o[1].jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/d1X1gZTv/14991182_10211221884646790_1087373774233417467_o.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/QtLdj9qq/15003192_10211221855166053_8744422322456337495_o.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/QMvHVnj1/15167444_10211374723827674_1557682048248050580_o.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/d03yhyrP/1606358_10203101971614039_416194314_o[1].jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/9Mz0xY0J/1618081_10203359906462249_1136637773_o[1].jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/cL9KGLjD/1780259_10203359870421348_2004822168_o[1].jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/13xFf2XP/1921203_10203359931022863_1037440640_o[1].jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/s2MMjRC3/2.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/bYs37ZB5/3.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/xCdJwSxG/5.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/g2PsLN29/7.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/KcMt7BVm/8.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/ryNwLpRS/IMG_0482.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/hjqckFSy/IMG_0494.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/jqctFkBc/IMG_0504.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/wvsRVYww/IMG_0533.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/RV85rrd7/IMG_5860.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/Bnr0FW1S/IMG_5879.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/7P0TJDG6/IMG_5883.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/PrDKqBhz/WhatsApp_Image_2020-11-22_at_6.39.44_PM.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/3rV4cVgp/WhatsApp_Image_2021-12-01_at_12.44.11_PM_(1).jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/rFYc8RVt/WhatsApp_Image_2021-12-01_at_7.10.52_PM.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/50jSWrnz/WhatsApp_Image_2021-12-01_at_7.12.30_PM.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/hjJT5dtb/WhatsApp_Image_2021-12-02_at_12.54.18_AM.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/X7nXZ56H/WhatsApp_Image_2021-12-02_at_12.54.27_AM_(1).jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/YSFtD2wL/WhatsApp_Image_2021-12-02_at_12.54.30_AM.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/wjGBbbyZ/WhatsApp_Image_2021-12-02_at_12.54.31_AM_(1).jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/L8n9fBCT/WhatsApp_Image_2021-12-02_at_7.39.50_PM_(1).jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/SR10NHhp/WhatsApp_Image_2021-12-02_at_7.39.51_PM.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/WbZFL8ny/WhatsApp_Image_2021-12-02_at_7.39.51_PM_(1).jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/4NGHzMV1/WhatsApp_Image_2021-12-02_at_7.39.52_PM_(1).jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
  {
    src: "https://i.postimg.cc/HL8LG4bx/WhatsApp_Image_2022-03-16_at_9.58.23_AM.jpg",
    title: "Cultural Diversity Celebration",
    description:
      "An event celebrating cultural diversity with employees showcasing traditions.",
  },
  {
    src: "https://i.postimg.cc/DyznkPTT/WhatsApp_Image_2022-03-16_at_9.58.32_AM.jpg",
    title: "Leadership Workshop",
    description:
      "A focused workshop to groom potential leaders within the organization.",
  },
  {
    src: "https://i.postimg.cc/YSFtD2wL/WhatsApp_Image_2021-12-02_at_12.54.30_AM.jpg",
    title: "Team Building Activity",
    description:
      "Employees engaged in outdoor team-building exercises to enhance collaboration and trust.",
  },
  {
    src: "https://i.postimg.cc/wjJrS17z/WhatsApp_Image_2022-03-16_at_9.58.51_AM.jpg",
    title: "Employee Training Session",
    description:
      "Interactive training session focused on skill development and leadership.",
  },
];

export default function GalleryData() {
  return (
    <Gallery
      bannerTitle="Explore Our Beautiful Moments"
      bannerSubtitle="Discover the wonders captured through our lens."
      images={images}
    />
  );
}

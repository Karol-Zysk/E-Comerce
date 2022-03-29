const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "LENOVO ThinkPad L13 ",
    imageUrl:
      "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/21/2113177/Laptop-LENOVO-ThinkPad-L13-front-10.jpg",
    description:
      "The ThinkPad L13 is powerful thanks to the 10th Gen Intel Core processor, SSD, DDR4 memory, super-fast Wi-Fi 6 connectivity and Windows 10 Professional. It is thin and light, with a diagonal of 13.3 inches. It also offers robust data security, privacy protection, and a fast-charging battery so you can safely take it to work on the go.",
    price: 540,
    countInStock: 20,
  },
  {
    name: "Huawei P30 Pro 6 GB",
    imageUrl:
      "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/31/3195656/HUAWEI-Nova-9-8-128GB-6.57-120Hz-Niebieski-Glowne.jpg",
    description:
      "The HUAWEI nova 9 opens a new chapter in the history of HUAWEI smartphones. The HUAWEI nova series was created for a young, dynamic generation characterized by high demands in terms of mobile experiences. The new flagship offers an exciting experience thanks to the Ultra Vision cameras: main - 50 MP and front - 32 MP, as well as super fast charging 66 W HUAWEI SuperCharge",
    price: 440,
    countInStock: 10,
  },
  {
    name: "ACER Predator Orion 3000 ",
    imageUrl:
      "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/29/2931860/Komputer-ACER-Predator-Orion-3000-PO3-630-01-front.jpg",
    description:
      "The computer is equipped with the NVIDIA GeForce GTX 1660 Super graphics card, which is adapted to games. It allows you to share the availability of the image, which guarantees gameplay on a level. The cache is 12 MB, which ensures the CPU browses as well as the efficiency of the computer. The processor has 6 cores, which allows several applications to work at once, while not slowing down the device.",
    price: 1020,
    countInStock: 14,
  },
  {
    name: "STEELSERIES Rival 3",
    imageUrl:
      "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/21/2127097/Mysz-STEELSERIES-Rival-3-front-00.jpg",
    description:
      "Are you looking for the right computer mouse to meet all your requirements? So be sure to check the STEELSERIES Rival 3 model. It has as many as 6 programmable buttons, a sensitive optical sensor, and its housing looks modern and elegant.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 20,
  },
  {
    name: "MSI Optix MAG322CR 32",
    imageUrl:
      "https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/21/2186901/Monitor-MSI-Optix-MAG322CR-przod.jpg",
    description:
      "The monitor is characterized by a high refresh rate, which is 165 Hz, as well as a millisecond response time of the matrix. Therefore, it will prove itself in dynamic games that require high precision of movements. This will give you an edge and give you a better chance of winning.",
    price: 420,
    countInStock: 10,
  },
];

module.exports = products;

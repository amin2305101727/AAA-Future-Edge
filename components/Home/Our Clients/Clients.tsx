import React from 'react'


const Clients = () => {
    const logos = [
        "http://118.179.223.59/media/company_logos/2017March/temakaw_logo_20170330093725_821.jpg",
        "https://www.reverie-bd.com/wp-content/uploads/2022/10/Reverie-Logo.png",
        "https://www.charteredlifebd.com/assets/images/logo.png",
        "https://www.azimandson.com/img/logo.png",
        "https://energypac.com.bd/public/frontend_assets/img/logo221.png",
        "https://safewaytech.com/wp-content/uploads/2022/10/safe-way-lgo.png",
        "https://www.grameendanone.net/wp-content/uploads/2023/01/logo.svg",
        "https://images.squarespace-cdn.com/content/v1/5171eee1e4b08db7106e5bbb/1511605732388-F0CDKPEK89LHTO9VR8MT/Drinkwell+Logo.png?format=1500w",
        
        "https://sslwireless.com/wp-content/uploads/2024/04/ssl-wireless-logo.png",
        "path/to/sophos.png",
        "path/to/fortinet.png",
        "path/to/vmware.png"
      ];
  return (
    <div>
        {/* banner part */}
<div className='flex h-[30vh] flex-col items-center justify-center bg-gradient-to-r from-white to-[#8a8c8e] max-[600px]:h-[50vh]'>
<h5 className="mb-4 text-6xl font-bold  text-black font-[Inter]">Our Clients</h5>   
 </div>
 {/* clients img */}
 <div>
    <div className='px-4 lg:container lg:mx-auto lg:max-w-[1300px] my-10'>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center px-2">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 object-contain"  // Adjust the height of logos as needed
          />
        ))}
      </div>
    </div>
 
 </div>

 
    </div>
  )
}

export default Clients
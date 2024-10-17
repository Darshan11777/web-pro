import React from "react";

const ServicesHeader = () => {
  const textContent = [
    { text: "Comprehensive", className: "text-gray-700" },
    { text: "IT", className: "text-rose-500" },
    { text: "Services", className: "text-rose-500" },
  ];
const data=[
  
  
  { number: "01.", title: "Web development" },
  { number: "02.", title: "Web design" },
  { number: "03.", title: "Digital marketing" },
  { number: "04.", title: "Graphic design" },
 
]
  return (
    <section className="mt-28 container  font-black text-black  leading-[102%] text-[150px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
      <div className="mt-28  font-black text-black   leading-[193px] text-[150px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10 font__control">
        <span className="font-bold text-left text-gray-700 uppercase">
          Comprehensive{" "}
          <span className="font-bold text-rose-500 uppercase">IT Services</span>
        </span>
        <br />{" "}
      </div>
      <div className="mt-9  w-full max-w-[1422px] max-md:max-w-full">
        <div className="flex gap-5  max-md:flex-col">
          <div className="   max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/67ae5480e2c32c7a34f867d827a119cb3e25f1e1546e89d8cce0da23e0396920?placeholderIfAbsent=true&apiKey=f17ba40545a9406bb4f9ad87dc16cadc"
                    className="object-contain grow w-full aspect-[1.51] rounded-[50px] max-md:mt-10"
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="w-[358px] text-[#453b57] text-[34px] font-normal font-['Lato'] uppercase leading-10 tracking-widest">
                    We are creative web design &<br />
                    branding agency based in London{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className=" w-[502px]  italic mt-[-50px]   flex-col text-gray-700 max-w-[502px] rounded-[50px]" style={{
    backgroundImage:
      "linear-gradient(to right, #ed5959 0%, #c6ffcf 28%, #bfcdff 60%, #ffe7d0 81%)",
  }}>
      <div className="flex flex-col items-start px-9 py-7 w-full rounded-[50px]  max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col gap-6 uppercase">
          
          {data.map((item,index)=>{
            return(
              <div key={index} className="flex gap-[23px]  text-[#453B57] font-[400] text-4xl  whitespace-nowrap">
            <div className=" max-md:ml-2.5 text-[40px] font-[300]">{item.number}</div>
            <p className="text-[40px] text-wrap line-clamp-2  w-[400px]">{item.title}</p>
          </div>
            )
          })}
          
          
        </div>
        <div className="flex gap-6 self-stretch mt-4">
        </div>
      </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;

function ServiceItem({imageSrc, title, description}) {
  return (
    <div className="item w-72 px-10">
      <img src={imageSrc} alt="" />
      <div className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="text-gray-900 rounded dark:text-white bg-white dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-violet-700 font-bold">WHAT WE SERVE</h1>
        <h1 className="text-4xl font-bold">
          Your Favourite Food <br />
          Delivery Partner
        </h1>
      </div>

      <div className="flex justify-center">
       <ServiceItem
        imageSrc="/images/Services-1.png"
        title="Easy To Order"
        description=""
       />
       <ServiceItem
        imageSrc="/images/Services-2.png"
        title="Fastest Delivery"
        description=""
       />
       <ServiceItem
        imageSrc="/images/Services-3.png"
        title="Best Quality"
        description=""
       />
      </div>
    </div>
  );
}
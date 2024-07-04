
export default function MenuItem() {
    const menuItems = [
        {
          id: 1,
          name: "California Pizza",
          price: 7.5,
          image: "/images/pizza-1.png",
        },
        {
          id: 2,
          name: "Margherita Pizza",
          price: 6.5,
          image: "/images/pizza-2.png",
        },
        {
          id: 3,
          name: "Pepperoni Pizza",
          price: 8.0,
          image: "/images/pizza-3.png",
        },
        {
          id: 4,
          name: "California Pizza",
          price: 7.5,
          image: "/images/pizza-1.png",
        },
        {
          id: 5,
          name: "Margherita Pizza",
          price: 6.5,
          image: "/images/pizza-2.png",
        },
        {
          id: 6,
          name: "Pepperoni Pizza",
          price: 8.0,
          image: "/images/pizza-3.png",
        },
    ];
    
  return (
    <div className="flex justify-center  dark:bg-gray-900 dark:text-whitex">
        <div className="flex gap-9 flex-wrap">
            {menuItems.map((item) => (
                <div key={item.id} className="card-menu border-gray-400 text-center py-4 px-4">
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                </div>
            )) }
        </div>
    </div>
  )
}

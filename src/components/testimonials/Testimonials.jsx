import "./testimonials.scss";

export default function Testimonials() {

  const data = [
    {
      id: 1,
      name: "Randeep Singh",
      title: "Junior Web Developer",
      img:
        "assets/rsingh.png",
      icon: "assets/twitter.png",
      desc:
        "Highly Motivated Individual who is very eager to imply the practical applications to real world like problems thus contributing to the economic development of a community.",
    },
    {
      id: 2,
      name: "Randeep Singh",
      title: "Junior Web Developer",
      img:
        "assets/rsingh.png",
      icon: "assets/linkedin.png",
      desc:
        "Highly Motivated Individual who is very eager to imply the practical applications to real world like problems thus contributing to the economic development of a community.",
      featured: true,
    },
    {
      id: 3,
      name: "Randeep Singh",
      title: "Junior Web Developer",
      img:
        "assets/rsingh.png",
      icon: "assets/youtube.png",
      desc:
        "Highly Motivated Individual who is very eager to imply the practical applications to real world like problems thus contributing to the economic development of a community.",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d)=>(
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" src="assets/right-arrow.png" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
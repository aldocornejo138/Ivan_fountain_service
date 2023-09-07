import React, { useState, useEffect } from "react";
import "./Reviews.css";
import { useInView } from "react-intersection-observer";

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 769) {
        setReviewsPerPage(1);
      } else {
        setReviewsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initialize the value based on initial width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Ken W.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/Si3XijDEDNT-Q6nXH-m7MA/60s.jpg",
      city: "San Diego",
      rating: 5,
      date: "August 13, 2023",
      comment:
        "The large fountain in our courtyard stopped working  so we called Ivan. He quickly diagnosed the problem that the existing pump is made to be above ground, and any dampness near the pump would trip the GFI. He quickly replaced the pump with a sealed pump and it is now functioning as it should be. Ivan was responsive, professional, confidence-inspiring, and his prices were reasonable. Thank you Ivan!",
    },
    {
      id: 2,
      name: "Cinder P.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/ZKBD8b7k6E87U5gwROPGNw/60s.jpg",
      city: "FallBrook, CA",
      rating: 5,
      date: "July 26, 2023",
      comment:
        "Ivan is amazing! We have been working together for years at The Madd Potter. We him to all of our customers in need of fountain services. The feedback is always positive. Very friendly and professional. When in need call Ivan indeed!",
    },
    {
      id: 3,
      name: "David H.",
      image:
        "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
      city: "Murrieta, CA",
      rating: 5,
      date: "July 13, 2023",
      comment:
        "I couldn't be happier.  Ivan was prompt, courteous and clearly knew what he was doing.  In less than an hour, he cleaned the pondless waterfall sump and  replaced the defective pump.  I was expecting an estimate of the damage and he had solved the problem in the same amount of time.",
    },
    {
      id: 4,
      name: "Celine V.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/hbn8yzU8fbfSn9I9YFFOiQ/60s.jpg",
      city: "Irvine, CA",
      rating: 5,
      date: "Jun 20, 2023",
      comment:
        "Ivan is superb. Great communicator, super reliable & responsible, nice, and just the best vendor we've worked with for these kinds of services. Great quality of work for a great price! Our tenants will be very happy. We asked him to help us with the backyard water fountain cleaning, and he did an amazing job. We will be working with him for all future jobs!",
    },
    {
      id: 5,
      name: "Tina M.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/xN5xJlN6GNn8KJMqJh8B6g/60s.jpg",
      city: "San Diego",
      rating: 5,
      date: "November 7, 2022",
      comment:
        "I had been looking for someone to come out and do a deep cleaning on my 3 tier fountain. I've had it for 5 years and I have been cleaning it myself but I knew it needed a deep clean and also to be resealed. Ivan is the right guy for your fountain cleaning job. He and his assistant are on time. Do a great job and in a very organized and clean manner. I was very happy with how my fountain turned out and Ivan also installed a plug for the fountain instead of the sealant putty I had been using. Ivan is a busy guy, so you need to be patient in getting a call back, but it's totally worth it. Thanks Ivan!!!",
    },
    {
      id: 6,
      name: "D. H.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/Zuy0iDyrGa9mYj66QUP1Lg/60s.jpg",
      city: "Murrieta, CA",
      rating: 5,
      date: "October 31, 2022",
      comment:
        "Ivan responded to my text message fast. The scheduling was easy. He came on time, did an amazing work and cleaned up in 45 mins. Highly recommend him for anyone who needs fountain maintenance.",
    },
    {
      id: 7,
      name: "Tushy J.",
      image:
        "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/514f6997a318/assets/img/default_avatars/user_60_square.png",
      city: "Murrieta, CA",
      rating: 5,
      date: "August 4, 2022",
      comment:
        "Ivan & his partner came out the next day and replaced the pump, replaced the old tubing, cleaned out the fountain, recommended a good algaecide safe for birds, and even sealed some of the copper fixtures to make sure the water flowed evenly into all the fountain bowls! Awesome!! I HIGHLY recommend Ivan and his team for really making a fountain work to the best of its ability!! Thank you!!!",
    },

    {
      id: 8,
      name: "Elsa L.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/rPSuJV5zhDHsIv73FfZSEw/60s.jpg",
      city: "San Diego",
      rating: 5,
      date: "August 4, 2022",
      comment:
        "Ivan kept in constant communication with the time and date he would come out. I understand how things are now a days, it's hard to find someone good and when you do they are extremely busy, but I will always wait for good service and you will not be disappointed by Ivan and his team.",
    },
    {
      id: 9,
      name: "William F.",
      image:
        "https://s3-media0.fl.yelpcdn.com/photo/3fgO29megsk4BvVR1EgGNg/60s.jpg",
      city: "Southern California, CA",
      rating: 5,
      date: "July 22,2021",
      comment:
        "Ivan was professional and quickly demonstrated that he knew the problems and the effective solutions. And he implemented them well, leaving the our fountain operating and looking great.He made the original installer and subsequent people I have hired for the fountain all look like amateurs.",
    },

    // Add more review objects as needed
  ];

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;

  const handlePreviousClick = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <section ref={ref} id="reviews" className="reviews-container">
      <div className={`title ${inView ? "zoomIn" : "zoomOut"}`}>
        <h1>Reviews</h1>
        <p>Look at What Clients Say About Us</p>
      </div>
      <div className={`reviews-container ${inView ? "zoomIn" : "zoomOut"}`}>
        <a
          href="https://www.yelp.com/biz/ivan-fountain-service-murrieta"
          className="link-style"
        >
          All Reviews straight out of Yelp. Click here to see all of our 55+ 5
          Star Reviews!
        </a>
      </div>

      <div className="reviews-list">
        {reviews.slice(startIndex, endIndex).map((review) => (
          <div key={review.id} className="review">
            <div className="review-content">
              <div
                className={`review-profile ${
                  inView ? "zoomInLeft" : "zoomOutLeft"
                }`}
              >
                <img src={`${review.image}`} alt={`${review.name}'s profile`} />
              </div>
              <div
                className={`review-header ${
                  inView ? "zoomInRight" : "zoomOutRight"
                }`}
              >
                <h2>{review.name}</h2>
                <p className="review-city">{review.city}</p>
                <div className="review-rating">
                  {Array.from({ length: review.rating }, (_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <div className="review-details">
              <h1
                className={`review-comment ${inView ? "zoomIn" : "zoomOut"} `}
              >
                " {review.comment} "
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className={`pagination ${inView ? "zoomIn" : "zoomOut"}`}>
        <button onClick={handlePreviousClick} disabled={currentPage === 1}>
          Previous
        </button>
        <div className="pagination-status">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={`circle ${index + 1 === currentPage ? "filled" : ""}`}
            />
          ))}
        </div>
        <button
          onClick={handleNextClick}
          disabled={currentPage * reviewsPerPage >= reviews.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Reviews;

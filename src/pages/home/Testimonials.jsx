import HeadingSection from "../../components/HeadingSection"


const Testimonials = () => {
  return (
    <div className="bg-colorsBg">
        <div className="section-container">
        <HeadingSection heading="What Our Clients Says" subheading="Testimonials" description="" />

        {/* testimonial carousel */}
        <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item md:space-x-8 relative w-full">
    <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo1.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">J</div>
            <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
            <p className='text-sm text-gray-500'>CEO, TechCorp</p>
          </div>
    </div>
    <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo2.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti. Consequuntur doloribus veritatis facilis tenetur !"</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">S</div>
            <h3 className='text-lg font-bold text-gray-800'>John Smith</h3>
            <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
          </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item md:space-x-8 relative w-full">
  <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo1.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consequatur molestias fugit culpa quasi dolorum commodi nemo est harum cum nihil iste ipsum, quis reiciendis.</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">J</div>
            <h3 className='text-lg font-bold text-gray-800'>Abdul Haque</h3>
            <p className='text-sm text-gray-500'>CEO, TechCorp</p>
          </div>
    </div>
    <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo2.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet alias dolor natus at quod facere corrupti. Consequuntur doloribus veritatis facilis tenetur !"</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">S</div>
            <h3 className='text-lg font-bold text-gray-800'>Watson Smith</h3>
            <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
          </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item md:space-x-8 relative w-full">
  <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo1.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">J</div>
            <h3 className='text-lg font-bold text-gray-800'>Kabir Tapai</h3>
            <p className='text-sm text-gray-500'>CEO, TechCorp</p>
          </div>
    </div>
    <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo2.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem magnam molestias similique adipisci ipsa deserunt! Voluptatibus unde minus quia mollitia.</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">S</div>
            <h3 className='text-lg font-bold text-gray-800'>John Smith</h3>
            <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
          </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item md:space-x-8 relative w-full">
  <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo1.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum."</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">J</div>
            <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
            <p className='text-sm text-gray-500'>CEO, TechCorp</p>
          </div>
    </div>
    <div className="bg-white md:w-1/2 rounded-md shrink p-4 md:p-8 ">
    <img
      src="/public/images/logos/logo2.png"
      className="size-28  mx-auto my-2 object-contain" />
          <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eum facilis, doloremque possimus maiores beatae quas, rerum cum quaerat, sunt odio ad? Officia sequi amet !"</p>
          <div className="flex  flex-col items-center  space-y-2 ">
            <div className="size-10 rounded-full bg-blue-100 flex justify-center items-center text-blue-600 text-2xl font-bold">S</div>
            <h3 className='text-lg font-bold text-gray-800'>John Smith</h3>
            <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
          </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
        </div>
    </div>
  )
}

export default Testimonials
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          <Link
  to='/'
  className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center'
>
  <img
    src="https://cdn.glitch.global/0b5c3fb1-8047-45d2-8de9-2d8258722094/jd_techh.png?v=1720537290292" style={{width: '50px'}}
  />
  <span className='ml-2 text-2xl sm:text-3xl font-sans'>JD NEWS HUB</span>
</Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Jd Techh's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.facebook.com/jnana.deepu.5/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Facebook
                </Footer.Link>
                <Footer.Link href='https://www.instagram.com/jd_techh/'>Instagram</Footer.Link>
                <Footer.Link href='https://x.com/jnanadeepak365'>Twitter</Footer.Link>
                <Footer.Link href='https://www.youtube.com/@jd_techh_'>Youtube</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="JD Techh blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/jnana.deepu.5/' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/jd_techh/' icon={BsInstagram}/>
            <Footer.Icon href='https://x.com/jnanadeepak365' icon={BsTwitter}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}

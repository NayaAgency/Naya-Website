import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton1 from '../components/primary-pink-button1'
import FeatureCard from '../components/feature-card'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>To je to</title>
        <meta property="og:title" content="To je to" />
      </Helmet>
      <Header></Header>
      <div className="home-home">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">
              <span className="home-text01 HeadingOneLATO">
                <span>
                  Let us take your OnlyFans
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br className="HeadingOneLATO"></br>
              <span className="home-text05 HeadingOneLATO">
                game to the next level.
              </span>
              <br></br>
            </h1>
            <span className="home-text07">
              <span>
                Whether you are just starting out, having difficulty growing
                your account, or simply seeking to enjoy life and outsource your
                activities, we are here for you.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <PrimaryPinkButton1
                  button="APPLY NOW"
                  rootClassName="primary-pink-button1-root-class-name1"
                ></PrimaryPinkButton1>
              </div>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                className="home-image"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                className="home-image1"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                className="home-image2"
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                className="home-image3"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved5-1500w.jpg"
        className="home-image4"
      />
      <section className="home-services">
        <div className="home-container05">
          <h1 className="home-text10">
            <span className="HeadingOneLATO">Services</span>
            <br className="home-text12"></br>
            <br className="home-text13"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
        </div>
        <FeatureCard
          text="We will monitor your social media accounts, provide regular updates, and interact with your audience in order to keep them interested and returning for more."
          title="Components"
          new_prop="Social Media Management"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Creating a cohesive brand and promotional strategy across multiple platforms. Our audience growth strategies are designed to help you reach new fans and boost your earnings."
          new_prop="Audience Growth"
          image_src="/playground_assets/person1.svg"
        ></FeatureCard>
        <FeatureCard
          text="We'll help you create high-quality, attention-grabbing content that resonates with your fans and showcases your unique talents."
          title="Less Code"
          new_prop="Content Creation"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="We will provide extensive analytics and reporting on your performance. Subscribers’ retention, revenue trends, and engagement metrics are just a few of them. "
          title="Fully Responsive"
          new_prop="Analytics and Reporting"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-about-us">
        <div className="home-container06">
          <h2 className="home-text15">
            <span className="HeadingOneLATO">About us</span>
            <br></br>
          </h2>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <div className="home-container09"></div>
            <div className="home-container10">
              <h1 className="home-text18 HeadingOneLATO">
                Search and Discover!
              </h1>
              <span className="home-text19">
                <span>Website visitors</span>
                <span></span>
              </span>
              <PrimaryPinkButton1
                button="APPLY NOW"
                rootClassName="primary-pink-button1-root-class-name2"
              ></PrimaryPinkButton1>
            </div>
          </div>
          <div className="home-container11">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container12">
          <div className="home-container13">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container14">
            <div className="home-container15"></div>
            <div className="home-container16">
              <h1 className="home-text22 HeadingOneLATO">Talk and Meet!</h1>
              <span className="home-text23">
                <span>Website visitors</span>
                <span></span>
              </span>
              <PrimaryPinkButton1
                button="APPLY NOW"
                rootClassName="primary-pink-button1-root-class-name3"
              ></PrimaryPinkButton1>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container17">
          <h2 className="home-text26">
            <span className="Punchline">
              With our Management Agency, the only limit is your imagination. So
              what are you waiting for? Join the elite and let us take your
              OnlyFans game to the next level.
            </span>
            <br></br>
            <br></br>
          </h2>
          <div className="home-container18"></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container19">
          <h2 className="home-text30 HeadingTwo">
            <span className="home-text31">Beware The Components</span>
          </h2>
          <h3 className="home-text32 HeadingTwo">
            <span className="home-text33">How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text34">
            <span className="home-text35">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container20">
          <div className="home-container21">
            <div className="home-container22"></div>
            <div className="home-container23">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text36 HeadingOneLATO">
                Search and Discover!
              </h1>
              <span className="home-text37">
                <span>Website visitors</span>
                <span></span>
              </span>
              <PrimaryPinkButton1
                button="APPLY NOW"
                rootClassName="primary-pink-button1-root-class-name5"
              ></PrimaryPinkButton1>
            </div>
          </div>
          <div className="home-container24">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
      </section>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home

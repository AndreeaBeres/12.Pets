import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SectionWithImage from './components/SectionWithImage';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import Quizzes from './Quizzes';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-center">
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionWithImage
                  title="If you're wondering whether to get a pet, don't hesitate any longer."
                  imgSrc="/images/cathug.gif"
                  imgAlt="Cat Hug"
                  content="Humans have always been social beings. We crave companionship, love, and affection, not just of other humans, but of animals as well. 
                  We have domesticated animals and have depended upon them for various purposes over thousands of years. While initially, humans depended 
                  upon their domesticated animals for means of transport, for transporting goods, for farming and for protection, modern-day humans require 
                  pets more for their companionship and for their goofy and comforting nature."
                />
                <SectionWithImage
                  title="1. An Endless Source of Love and Affection"
                  imgSrc="/images/cat.gif"
                  imgAlt="Cat"
                  content="A pet’s love towards their human is pure, unconditional, and true. When you bring a pet to your home for the first 
                  time, especially if you have rescued the little fur-baby, they tend to remember it for a lifetime, and do not take this 
                  for granted. While they do admire us for the delicious treats and mouth-watering food we give them, pets love us for more 
                  than that. The bonds pets share with their humans cannot be quantified. As they grow increasingly attached to their humans, 
                  some pets may even develop separation anxiety when kept away from their masters for too long. Regardless of your situation 
                  and personal life, we can all use such unconditional love in our lives from time to time."
                />
                <SectionWithImage
                  title="2. Spending Time with Pets Can Relieve Stress"
                  imgSrc="/images/parrot.gif"
                  imgAlt="Parrot"
                  content="Spending quality time with your pets has scientifically been proven to reduce stress levels and lower heightened blood pressure. 
                  Petting your fur-baby can reduce heightened blood pressure by 5-10%. This is the very reason well-trained cats and dogs are often 
                  used for therapy in hospitals, homes for the elderly and other places where stress relief is required. Additionally, spending time 
                  playing with our pets also acts as a stress buster and helps vent out frustration and negative energy."
                />
                <SectionWithImage
                  title="3. Pets are a Social Magnet"
                  imgSrc="/images/catlove.gif"
                  imgAlt="CatLove"
                  content="Our pets quickly become the centre of attraction wherever we take them. People flock towards them to give them a gentle pet, to 
                  play with them or just to say hi and adore their cuteness! This gives their owners the opportunity to meet and mingle with new 
                  people and thereby broaden their social circle. Furthermore, pets often give us a reason to head outdoors when we would otherwise 
                  just be content in having a comfortable beer on a Sunday afternoon. Even on the occasions we do not bring our pets along with us, 
                  talking about them and sharing their entertaining, funny, and delightful photos and videos become an engaging conversation starter."
                />
                <SectionWithImage
                  title="4. Pets Can Help Improve Your Mood"
                  imgSrc="/images/favorite.webp"
                  imgAlt="Dog"
                  content="Spending time with your pet releases oxytocin in your brain. Oxytocin, is the chemical that is responsible for us feeling happy and 
                  relaxed, and is fondly known as the “love hormone.” This makes time spent with your pet more relaxing and enjoyable. Furthermore, 
                  recent studies have reported that people who own pets are less likely to fall into depression as compared to people who don’t. In the 
                  post-pandemic era, when more and more of us are spending time working from home, having the companionship of a pet may help us keep a 
                  happier and more jovial temper."
                />
                <SectionWithImage
                  title="5. Pet Ownership Teaches Responsibility"
                  imgSrc="/images/responsible.gif"
                  imgAlt="responsibility"
                  content="Owning a pet comes with its own sets of responsibilities and duties. As a pet owner, we are literally responsible to take care of 
                  another living being and care of all their needs and desires. This responsibility is not just limited to feeding them on time or providing 
                  them with initial training but is a life-long commitment. If you have a dog, you are responsible to maintain their fitness by taking them 
                  out for regular walks. Cats may not require walks; however, their litter needs to be changed on a daily basis. Even taking care of fish is 
                  a major responsibility because you must continuously monitor their aquarium and change the water if it gets too dirty. In tending to a pet, 
                  one realises that they quickly grow up and become more mature than they were before."
                />
                <SectionWithImage
                  title="6. A Package of Entertainment"
                  imgSrc="/images/catpl.webp"
                  imgAlt="playing"
                  content="In addition to being a bundle of joy and a fountain of love and affection, our pets are also an entire package of entertainment in their own 
                  right. Every pet tends to have his/ her own personality that causes specific quirks or habits that are not just entertaining, but are also 
                  adorable! Spending time with your pets or just sitting and observing them while you go about your own day brings a lot of entertainment, joy, 
                  and laughter. You will be surprised how often your pet’s distinctive quirks and habits distract you from the issues you are having and cause 
                  you to engage in more heart-healthy laughter to keep boredom away."
                />
                <SectionWithImage
                  title="7. Safety and Security"
                  imgSrc="/images/rescue.jpg"
                  imgAlt="rescue"
                  content="While our pets do provide companionship and are a lot of fun to cuddle with, they also provide a sense of security. Dogs are known for barking 
                  and raising an alarm when the house is in threat of being breached by outsiders. Bigger dogs are especially great in guarding properties and 
                  scaring away thieves and other unwanted parties. That being said, other pets such as cats, rabbits and ferrets also provide a sense of security as 
                  they make the four walls of your apartment feel like home. They provide comfort in knowing that there will be someone waiting for you when you get 
                  home… someone who loves you depends on you and someone to whom you mean the entire world!"
                />
                <SectionWithImage
                  title="8. Pets Can Help with Your Child’s learning"
                  imgSrc="/images/relax.jpg"
                  imgAlt="relax"
                  content="Growing up with a pet in the house not only gives children a playmate but also ensures that they get to learn a lot. Children that grow up with pets 
                  not only learn more responsibility through taking care of their pets, but also learn to share, learn how to cope with not being the centre of attention, 
                  and learn how to empathise with living beings. Additionally, children that have grown up with pets have been known to have better immunity against certain 
                  allergies. Children who are exposed to cats and dogs from an early age, in particular, tend to build stronger and more effective immunity systems."
                />
                <SectionWithImage
                  title="9. Pet Ownership Makes Better Humans"
                  imgSrc="/images/better.jpg"
                  imgAlt="better"
                  content="Recent studies have proven that being a pet owner makes people more agreeable to be around and greatly enhances their ability to have positive 
                  relationships with others. Pet ownership has been linked to a positive change in the owner’s attitude when it comes to attributes such as patience, 
                  reliability, and affection. Owning and caring for a pet has also seen individuals become less violent and verbally aggressive."
                />
                <SectionWithImage
                  title="10. Pets Make You More Physically Active"
                  imgSrc="/images/wellbeing.webp"
                  imgAlt="wellbeing"
                  content="This is particularly true for people that own dogs. Dogs need to go outside or need to access the outdoors at least once, if not twice a day. 
                  Taking pets out twice a day for a casual or walk, helps owners achieve their recommended 30 minutes of active time during the day. To add to this, 
                  pet owners burn even more calories when they engage in play sessions with their fur-buddies."
                />
                <Gallery />
                <Testimonials />
                <Quiz />
              </>
            }
          />
          <Route path="/quizzes" element={<Quizzes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

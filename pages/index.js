import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid#/media/File:Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
    address: "Some address 5, 12345 cirty",
    description: "this is a first meeup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid#/media/File:Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
    address: "Some address 5, 12345 cirty",
    description: "this is a first meeup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // also a reserverd name, alternative to getstaticprops
//   // this never run on the client, but on the server.
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //reserved name. this code will never run on the client side and not on the server. only in the build process.
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10, // will regenrate after every 10s.
  };
}

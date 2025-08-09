import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetup"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

export async function getStaticProps() {
  //reserved name. this code will never run on the client side and not on the server. only in the build process.
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://shamecanales1082:kwTT9egcVBnAEZTx@cluster0.daoqyjp.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray(); //find all
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10, // will regenrate after every 10s.
  };
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

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A first meetup",
//     image:
//       "https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid#/media/File:Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
//     address: "Some address 5, 12345 cirty",
//     description: "this is a first meeup",
//   },
//   {
//     id: "m2",
//     title: "A second meetup",
//     image:
//       "https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid#/media/File:Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
//     address: "Some address 5, 12345 cirty",
//     description: "this is a first meeup",
//   },
// ];

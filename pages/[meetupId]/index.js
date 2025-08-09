import MeetupDetails from "../../components/meetups/MeetupDetail";

export default function MeetupDetail() {
  return (
    <MeetupDetails
      image="https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid#/media/File:Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg"
      title="A first meetup"
      address="Some street 5, some city 4"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://en.wikipedia.org/wiki/Royal_Palace_of_Madrid#/media/File:Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
        id: meetupId,
        title: "First meetup",
        address: "Some street 5, some city 4",
        description: "The meetup description",
      },
    },
  };
}

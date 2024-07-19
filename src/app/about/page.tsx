import { Box, Heading, Text, List, ListItem, Link, VStack } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      
        <Heading as="h1" size="2xl">About CarefinderPro</Heading>
        
        <Text fontSize="lg">
          CarefinderPro is a platform designed to help users find, export, and share information about hospitals within their region in Nigeria. Our vision at CareFinder is to become the preeminent search engine for care homes. We go beyond simply narrowing down options based on the criteria provided. We pledge to build and use data analytics that have been underutilised in the sector, to serve a market that has been underfunded and largely ignored for decades. Our mission is to make the process of finding the ideal care home for loved ones as easy and stress-free as possible. We strive to provide the best, most accurate information and resources to help families make informed decisions about the care of their loved ones.
        </Text>
        
        <Heading as="h2" size="lg">Purpose</Heading>
        <Text fontSize="lg">
        We understand that finding the right hospital can be a daunting and overwhelming task, which is why we have made it our priority to provide a comprehensive and user-friendly platform for our clients which allows you search for hospitals based on location, type of care, and amenities, making it easy for you to find the ideal match for your loved one.
        </Text>
        
        <Heading as="h2" size="lg">Features</Heading>
        <List spacing={2} fontSize="lg">
          <ListItem>🔍 <strong>Search Hospitals:</strong> Easily search for hospitals based on location and other criteria.</ListItem>
          <ListItem>📄 <strong>Export Information:</strong> Export hospital details for offline use or sharing with others.</ListItem>
          <ListItem>📤 <strong>Share:</strong> Share hospital information directly with friends and family.</ListItem>
          <ListItem>🗺️ <strong>Map View:</strong> Visualize hospital locations on an interactive map.</ListItem>
        </List>
        
        <Heading as="h2" size="lg">User Benefits</Heading>
        <Text fontSize="lg">
          Carefinder empowers users by providing them with the tools to make informed decisions about their healthcare options. Whether you're looking for the nearest hospital, need to export hospital details for reference, or want to share information with loved ones, Carefinder has you covered.
        </Text>
        
        <Heading as="h2" size="lg">Future Plans</Heading>
        <Text fontSize="lg">
          We are continuously working on improving Carefinder. Future updates will include additional filtering options, user reviews, and a more comprehensive database of hospitals. Stay tuned for more exciting features!
        </Text>
        
        <Heading as="h2" size="lg">Contact Us</Heading>
        <Text fontSize="lg">
          If you have any questions, feedback, or need support, please feel free to <Link href="/contact" color="blue.500" className="hover:underline">contact us</Link>.
        </Text>
      
    </div>
  );
};

export default About;
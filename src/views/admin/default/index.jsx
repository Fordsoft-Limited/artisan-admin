
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React, { useState , useEffect} from "react";
import {
  MdAddTask,
  MdNewspaper,
  MdBarChart,
  MdPerson,
  MdFace,
} from "react-icons/md";
import { FcAdvertising } from "react-icons/fc";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import ConversationService from "services/ConversatonService";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const currentYear = new Date().getFullYear();
  const[reportData, setReportData] = useState({})
  const[chatData, setChatData] = useState([
    {
      name: "Monthly Visitor Report",
      data: [20, 30, 40, 20, 45, 50, 30,40,90,20,12,30],
    },
  ])
 
  const fetchReport = async () => {
    try {
      const{data} = await ConversationService.fetchDashBoardReport(currentYear
      ); // Call the function with page and limit
      const mainResponseData = data["data"]
      setReportData(mainResponseData);
      setChatData([{name: 'Monthly Visitors report', data: Object.values(mainResponseData["visitorReports"])}])
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap="20px"
        mb="20px"
      >
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdBarChart} color={brandColor} />
              }
            />
          }
          name="Total Number Of Visitors"
          value={reportData?.visitorCount}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={MdFace} color={brandColor} />}
            />
          }
          name="Total Number Of Artisan"
          value={reportData?.artisanCount}
        />

        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={<Icon w="32px" h="32px" as={FcAdvertising} color={brandColor} />}
            />
          }
          name="Total Advert"
          value={reportData?.advertisementCount}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdNewspaper} color={brandColor} />
              }
            />
          }
          name="Total Blogs"
          value={reportData?.blogsCount}
        />
       
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="Activity logs"
          value="0"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdPerson} color={brandColor} />
              }
            />
          }
          name="Total Users"
          value={reportData?.userCount}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
      
        <DailyTraffic totalVisitor={reportData?.visitorCount} reportYear={currentYear}
        barChartDataDailyTraffic={chatData}/>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
      <MiniCalendar h="100%" minW="100%" selectRange={false} />

        <PieCard />
      </SimpleGrid>
    </Box>
  );
}

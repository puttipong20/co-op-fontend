import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Bred({ data, path }) {
  return (
    <Box mx={4} pt={4} minW={"100%"}>
      <Breadcrumb spacing="8px" separator={<AiOutlineRight color="gray.500" />}>
        <BreadcrumbItem>
          <Link to={"/"}>
            <Text>หน้าหลัก</Text>
          </Link>
        </BreadcrumbItem>

        {data && (
          <BreadcrumbItem>
            <Text>{data}</Text>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </Box>
  );
}

export default Bred;

import { ThemeToggler } from "@/components/theme/theme-toggler";
import { TypographyH1 } from "./typography/typography-h1";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoHome } from "react-icons/io5";
import { FaArrowUpRightDots, FaBorderAll } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

const NavBar = ({
  selectedValue,
  setSelectedValue,
  searchQuery,
  setSearchQuery,
}: {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen bg-accent">
      <div className="flex justify-between items-center w-full px-4 xl:px-0 xl:w-[1480px] mx-auto py-4">
        <div className="flex items-center gap-4">
          <TypographyH1>Braddit</TypographyH1>
          <Select value={selectedValue} onValueChange={setSelectedValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a subreddit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="/">
                  <IoHome /> Home
                </SelectItem>
                <SelectItem value="/r/popular">
                  <FaArrowUpRightDots /> Popular
                </SelectItem>
                <SelectItem value="/r/all">
                  <FaBorderAll /> All
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-1 mx-16">
          <Input
            placeholder="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        <ThemeToggler />
      </div>
    </div>
  );
};

export default NavBar;

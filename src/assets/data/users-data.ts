import { Position, UserData } from "../../types/user-data";

/**
 * The mock data to be used for simulation.
 */
const userData: UserData[] = [
  {
    branchId: 10001,
    userName: "testuser01",
    password: "pa55w0rd001",
    firstName: "John",
    middleName: "Sanchez",
    lastName: "Doe",
    position: Position.Developer,
  },
  {
    branchId: 10002,
    userName: "testuser02",
    password: "pa55w0rd002",
    firstName: "Ricardo",
    middleName: "Dubov",
    lastName: "Martinez",
    position: Position.LeadDeveloper,
  },
  {
    branchId: 10003,
    userName: "testuser03",
    password: "pa55w0rd003",
    firstName: "Gol",
    middleName: "Denver",
    lastName: "Roger",
    position: Position.ProjectManager,
  },
];

export default userData;

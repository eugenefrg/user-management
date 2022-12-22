export enum Position {
  Developer = "Developer",
  LeadDeveloper = "Lead Developer",
  ProjectManager = "Project Manager",
}

export interface UserData {
  /**
   * The assigned Branch ID.
   */
  branchId: number;

  /**
   * Given user name for authentication.
   */
  userName: string;

  /**
   * Given password for authentication. Ideally this should be
   * encrypted.
   */
  password: string;

  /**
   * First name of the user.
   */
  firstName: string;

  /**
   * Middle name of the user.
   */
  middleName: string;

  /**
   * Last name of the user.
   */
  lastName: string;

  /**
   * Position of the user.
   */
  position: Position;
}

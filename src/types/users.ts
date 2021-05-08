export interface UserApiResponse {
    results: IUserInfo[];
    info: ApiResponseInfo;
}

export interface ApiResponseInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface IUserInfo {
    gender: UserGenderType | string;
    name: IUserName;
    location: IUserLoc;
    email: string;
    login: IUserLoginData;
    dob: IUserBirthday;
    registered: IUserRegDate;
    phone: string;
    cell: string;
    id: IUserID;
    picture: IUserPicture;
    nat: string;
}

export type UserGenderType = "male" | "female";

interface IUserName {
    title: string,
    first: string,
    last: string
}

interface IUserLoc {
    city: string,
    country: string,
    postcode: number | string,
    state: string,
    coordinates: IUserCord,
    street: IUserStreet,
    timezone: IUserTimezone
}

interface IUserCord {
    latitude: string,
    longitude: string
}
interface IUserStreet {
    number: number,
    name: string
}
interface IUserTimezone {
    offset: string,
    description: string,
}

interface IUserLoginData {
    md5: string,
    password: string,
    salt: string,
    shal: string,
    sha256: string,
    username: string,
    uuid: string
}

interface IUserBirthday {
    age: number,
    date: string
}

interface IUserRegDate {
    age: number,
    date: string
}

interface IUserID {
    name: string,
    value: string | null
}

interface IUserPicture {
    large: string,
    medium: string,
    thumbnail: string
}
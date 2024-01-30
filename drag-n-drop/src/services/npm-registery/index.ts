const API_ENDPOINT = 'https://registry.npmjs.org/';
const API_ENDPOINT_2 = 'https://api.npmjs.org/';
import {PackageJson} from "type-fest";

export enum DownloadPeriods {
    lastDay = 'last-day',
    lastWeek = 'last-week',
    lastMonth = 'last-month',
    lastYear = 'last-year'
}

export type RegisteryType = {
    db_name: string,
    engine: string,
    doc_count: number,
    doc_del_count: number,
    update_seq: number,
    purge_seq: number,
    compact_running: boolean,
    sizes: {
        active: number,
        external: number,
        file: number
    },
    disk_size: number,
    data_size: number,
    other: {
        data_size: number
    },
    instance_start_time: string,
    disk_format_version: number,
    committed_update_seq: number,
    compacted_seq: number,
    uuid: string
}


export type PackageMetaDataType = {
    "_id": string,
    "_rev": string,
    name: string,
    description: string,
    "dist-tags": {
        latest: string
    },
    time: {
        [key:string] : string
    },
    maintainers: Array<{name: string, email: string}>,
    readme: string,
    versions: {
        [key:string]: PackageJson
    },
    homepage: string,
    keywords: Array<string>,
    repository: {
        type: string,
        url: string
    },
    author: {
        name: string
    },
    bugs: {
        url: string
    },
    license: string,
    readmeFilename: string,
    uers: {
        crouman: boolean
    }
}

export type PackageVersionDeailType = PackageJson & {
    _id: string,
    _nodeVersion: string,
    _npmVersion: string,
    _npmUser: string,
    _npmOperationalInternal: {
        host: string,
        temp: string
    },
    _hasShrinkwrap: boolean
}

export type DownloadType = {
    downloads: number,
    start: string,
    end: string,
    package: string
}

export async function fetchRegisteryInfo(){
    const res = await fetch(API_ENDPOINT);
    const data = await res.json();
    return data as RegisteryType;
}

export async function getPackageMetaData(package_name:string){
    const res = await fetch(API_ENDPOINT+package_name);
    const data = await res.json();
    return data as PackageMetaDataType;
}

export async function getPackageVersionDetail(package_name:string, version: string){
    const res = await fetch(API_ENDPOINT+package_name+'/'+version);
    const data = await res.json();
    return data as PackageVersionDeailType;
}

export async function getPackageDownloadDetail(package_name:string, period:DownloadPeriods = DownloadPeriods.lastWeek){
    const res = await fetch(`${API_ENDPOINT_2}downloads/point/${period}/${package_name}`);
    const data = await res.json();
    return data as DownloadType;
}
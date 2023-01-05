import { Coords } from './common';
import {
  RequestLevelOfDetail,
  TimeMapRequestLevelOfDetailScaleType,
} from './timeMap';

export type TimeMapFastTransportation = 'public_transport' | 'driving' | 'driving+public_transport' | 'driving+ferry' | 'cycling' | 'cycling+ferry' | 'walking' | 'walking+ferry'

export type TimeMapFastRequestLevelOfDetailScaleType = TimeMapRequestLevelOfDetailScaleType | 'simple_numeric'

export type TimeMapFastRequestLevelOfDetail = Omit<RequestLevelOfDetail, 'scale_type'> & {scale_type: TimeMapFastRequestLevelOfDetailScaleType}

export type TimeMapFastRequestSearch = {
  id: string,
  coords: Coords,
  transportation: {
    type: TimeMapFastTransportation
  },
  arrival_time_period : 'weekday_morning',
  travel_time: number,
  level_of_detail?: TimeMapFastRequestLevelOfDetail
}

export type TimeMapFastRequestArrivalSearch = {
  one_to_many?: Array<TimeMapFastRequestSearch>,
  many_to_one?: Array<TimeMapFastRequestSearch>
}

export type TimeMapFastRequest = {
  arrival_searches: TimeMapFastRequestArrivalSearch
}
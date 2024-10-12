type TypeMeetingTypes = "physical" | "online" | "hybrid";
type MeetingListType = {
  id: number;
  city?: string;
  day: 0 | 1 | 2 | 2 | 4 | 5 | 6;
  name: string;
  startTime: string;
  endTime: string;
  address: string;
  gMap?: string;
  logo?: string;
  bannner?: string;
  type: TypeMeetingTypes;
};

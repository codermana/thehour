import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function DateTime({ timestamp }: { timestamp: Date }) {
  return (
    <>
      <FormattedDate timestamp={timestamp}/> • <FormattedTime timestamp={timestamp}/>
    </>
  )

}

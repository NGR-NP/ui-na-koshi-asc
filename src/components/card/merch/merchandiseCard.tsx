import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import MerchCardFooter from "./MerchCardFooter";

interface MerchandiseCardProps {
  merch: merchType;
}
export default function MerchandiseCard({ merch }: MerchandiseCardProps) {
  return (
    <Card className="group mx-auto h-full w-11/12 max-w-96 select-none rounded-xl shadow-md duration-500 hover:shadow-xl sm:w-full">
      <CardHeader>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${merch.name}200/300`}
          alt={merch.name}
          width={200}
          height={200}
          className="h-56 w-full rounded-t-lg object-cover transition-all duration-500 ease-in-out focus:pointer-events-none active:pointer-events-none active:object-contain active:duration-500"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="select-text">{merch.name}</CardTitle>
        {merch?.desc && (
          <CardDescription className="mt-2 line-clamp-2">
            {merch.desc}
          </CardDescription>
        )}
      </CardContent>
      <MerchCardFooter merch={merch} />
    </Card>
  );
}

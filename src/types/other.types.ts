type NotificationType = "Silent" | "Ring" | "default";
interface SVGProp extends React.SVGProps<SVGSVGElement> {
  solid?: boolean;
}

type SvgIconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type QuoteType = {
  quote: string;
  name: string;
  title: string;
};

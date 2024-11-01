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
interface ChildrenType {
  children: React.ReactNode;
}
interface ReadOnlyChildrenType {
  readonly children: React.ReactNode;
}
interface TypeSearchParams {
  searchParams: { platform?: string; os: string };
}
interface TypeChildrenWithSearchParams
  extends ReadOnlyChildrenType,
    TypeSearchParams {}

type TypeSetState<T> = React.Dispatch<React.SetStateAction<T>>;

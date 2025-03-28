declare module "*.jpg" {
    const value: string;
    export default value;
  }
  declare module "*.svg" {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export { ReactComponent };
    export default src;
  }
  
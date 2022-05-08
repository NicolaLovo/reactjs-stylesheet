interface CSSProperties {
  [key: string]: React.CSSProperties;
}

class Stylesheet {
  static create(styleData: CSSProperties): CSSProperties {
    return styleData;
  }
}
export default Stylesheet;

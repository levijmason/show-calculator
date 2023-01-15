import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/7596b6/00000000000000007735f0d1/30/l?subset_id=2&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/7596b6/00000000000000007735f0d1/30/d?subset_id=2&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/7596b6/00000000000000007735f0d1/30/a?subset_id=2&fvd=n6&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/ae48c7/00000000000000007735f0d5/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/ae48c7/00000000000000007735f0d5/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/ae48c7/00000000000000007735f0d5/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:300;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/302a59/00000000000000007735f0cd/30/l?subset_id=2&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/302a59/00000000000000007735f0cd/30/d?subset_id=2&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/302a59/00000000000000007735f0cd/30/a?subset_id=2&fvd=n9&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/2e6c84/00000000000000007735f0cf/30/l?subset_id=2&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/2e6c84/00000000000000007735f0cf/30/d?subset_id=2&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/2e6c84/00000000000000007735f0cf/30/a?subset_id=2&fvd=i5&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:500;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/80bf8a/00000000000000007735f0cb/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/80bf8a/00000000000000007735f0cb/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/80bf8a/00000000000000007735f0cb/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/465f1b/00000000000000007735f0d4/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/465f1b/00000000000000007735f0d4/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/465f1b/00000000000000007735f0d4/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/2af535/00000000000000007735f0c9/30/l?subset_id=2&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/2af535/00000000000000007735f0c9/30/d?subset_id=2&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/2af535/00000000000000007735f0c9/30/a?subset_id=2&fvd=i6&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:600;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/f05476/00000000000000007735f0ca/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/f05476/00000000000000007735f0ca/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/f05476/00000000000000007735f0ca/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/30c579/00000000000000007735f0d0/30/l?subset_id=2&fvd=i9&v=3") format("woff2"),url("https://use.typekit.net/af/30c579/00000000000000007735f0d0/30/d?subset_id=2&fvd=i9&v=3") format("woff"),url("https://use.typekit.net/af/30c579/00000000000000007735f0d0/30/a?subset_id=2&fvd=i9&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:900;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent";
        src:url("https://use.typekit.net/af/70bbaf/00000000000000007735f0d2/30/l?subset_id=2&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/70bbaf/00000000000000007735f0d2/30/d?subset_id=2&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/70bbaf/00000000000000007735f0d2/30/a?subset_id=2&fvd=n5&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent-text";
        src:url("https://use.typekit.net/af/78ef1c/00000000000000007735b46a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/78ef1c/00000000000000007735b46a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/78ef1c/00000000000000007735b46a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent-text";
        src:url("https://use.typekit.net/af/1a03d0/00000000000000007735b475/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/1a03d0/00000000000000007735b475/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/1a03d0/00000000000000007735b475/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent-text";
        src:url("https://use.typekit.net/af/522be8/00000000000000007735b477/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/522be8/00000000000000007735b477/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/522be8/00000000000000007735b477/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
        font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
        }
        
        @font-face {
        font-family:"paralucent-text";
        src:url("https://use.typekit.net/af/cf3100/00000000000000007735b480/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/cf3100/00000000000000007735b480/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/cf3100/00000000000000007735b480/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
        font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
        }
      `}
  />
)
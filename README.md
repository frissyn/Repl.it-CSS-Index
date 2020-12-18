## Repl.it CSS Index

Collecton of CSS files scraped from repl.it for the purpose of CSS injection and theming. I needed a place to organize all the CSS I was scraing, for the sake of my eyes and sanity, so I decided to, **by hand**, organize all of the CSS I'd acquired from Repl.it's HTML pages. So you don't have to. ~~Be grateful.~~ :P

## Directory Structure

The folder names are pretty self-intuitive. Each folder contains the CSS that styles that specfic portion of Repl.it! Some of might be named incorrectly, I could only do so much with Inspect and I couldn't get any CSS Inspector Chrome Extensions working for the life of me. :( If you think a folder or file's name should be changed or moved, just open an issuse ;)

## Color Index

Since I made this for the sake of creating custom themes for Repl.it, it would make sense to keep track of all the colors, so here it is:

```css
// ----- Root Colors (Site Only) -----
:root {
--color-brand-dark-blue: #0D101E;
--color-brand-light-blue: #68CDEE;
--color-brand-gray: #6D7D84;
--color-white: #ffffff;
--color-black: #000000;
--color-green-1: #21a243;
--color-green-2: #21953e;
--color-green-3: #228a3a;
--color-green-4: #228037;
--color-green-transparent-1: rgba(24, 204, 81, 0.48);
--color-green-transparent-2: rgba(24, 204, 81, 0.24);
--color-green-transparent-3: rgba(24, 204, 81, 0.12);
--color-red-1: #ff491c;
--color-red-2: #e9441b;
--color-red-3: #d8411b;
--color-red-4: #c93d1a;
--color-red-transparent-1: rgba(255, 73, 28, 0.48);
--color-red-transparent-2: rgba(255, 73, 28, 0.24);
--color-red-transparent-3: rgba(255, 73, 28, 0.12);
--color-blue-1: #3485e4;
--color-blue-2: #337ad1;
--color-blue-3: #3272c2;
--color-blue-4: #316ab4;
--color-blue-transparent-1: rgba(52, 133, 228, 0.48);
--color-blue-transparent-2: rgba(52, 133, 228, 0.24);
--color-blue-transparent-3: rgba(52, 133, 228, 0.12);
--color-orange-1: #eb6404;
--color-orange-2: #d65c08;
--color-orange-3: #c7560b;
--color-orange-4: #b8510d;
--color-orange-transparent-1: rgba(242, 103, 2, 0.48);
--color-orange-transparent-2: rgba(242, 103, 2, 0.24);
--color-orange-transparent-3: rgba(242, 103, 2, 0.12);
--color-purple-1: #ae46ee;
--color-purple-2: #a142db;
--color-purple-3: #963ecc;
--color-purple-4: #8d3bbf;
--color-purple-transparent-1: rgba(174, 70, 238, 0.48);
--color-purple-transparent-2: rgba(174, 70, 238, 0.24);
--color-purple-transparent-3: rgba(174, 70, 238, 0.12);
--color-gold-1: #ad8815;
--color-gold-2: #a07d16;
--color-gold-3: #937317;
--color-gold-4: #8a6c17;
--color-gold-transparent-1: rgba(255, 199, 0, 0.48);
--color-gold-transparent-2: rgba(255, 199, 0, 0.24);
--color-gold-transparent-3: rgba(255, 199, 0, 0.12);
--color-pink-1: #eb45d1;
--color-pink-2: #d842bf;
--color-pink-3: #c73eb0;
--color-pink-4: #b93ba4;
--color-pink-transparent-1: rgba(238, 70, 211, 0.48);
--color-pink-transparent-2: rgba(238, 70, 211, 0.24);
--color-pink-transparent-3: rgba(238, 70, 211, 0.12);
--color-teal-1: #159bb0;
--color-teal-2: #198ea1;
--color-teal-3: #1c8395;
--color-teal-4: #1d7a8a;
--color-teal-transparent-1: rgba(0, 181, 206, 0.48);
--color-teal-transparent-2: rgba(0, 181, 206, 0.24);
--color-teal-transparent-3: rgba(0, 181, 206, 0.12);
}

// ----- Light Theme Colors (IDE Only) -----
.replit-ui-theme-root.light {
--color-background-1: #ffffff;
--color-background-2: #f6f6f6;
--color-background-3: #eeeeee;
--color-control-1: #e0e0e0;
--color-control-2: #e9e9e9;
--color-control-3: #f3f3f3;
--color-border: #e0e0e0;
--color-foreground-1: #363636;
--color-foreground-2: #6f6f6f;
--color-foreground-3: #949494;
--color-foreground-4: #b7b7b7;
--color-foreground-transparent-1: rgba(255, 255, 255, 0.48);
--color-foreground-transparent-2: rgba(255, 255, 255, 0.24);
--color-foreground-transparent-3: rgba(255, 255, 255, 0.12);
--color-primary-1: #3485e4;
--color-primary-2: #337ad1;
--color-primary-3: #3272c2;
--color-primary-4: #316ab4;
--color-primary-transparent-1: rgba(52, 133, 228, 0.48);
--color-primary-transparent-2: rgba(52, 133, 228, 0.24);
--color-primary-transparent-3: rgba(52, 133, 228, 0.12);
--color-negative-1: #ff491c;
--color-negative-2: #e9441b;
--color-negative-3: #d8411b;
--color-negative-4: #c93d1a;
--color-negative-transparent-1: rgba(255, 73, 28, 0.48);
--color-negative-transparent-2: rgba(255, 73, 28, 0.24);
--color-negative-transparent-3: rgba(255, 73, 28, 0.12);
--color-warning-1: #eb6404;
--color-warning-2: #d65c08;
--color-warning-3: #c7560b;
--color-warning-4: #b8510d;
--color-warning-transparent-1: rgba(242, 103, 2, 0.48);
--color-warning-transparent-2: rgba(242, 103, 2, 0.24);
--color-warning-transparent-3: rgba(242, 103, 2, 0.12);
--color-positive-1: #21a243;
--color-positive-2: #21953e;
--color-positive-3: #228a3a;
--color-positive-4: #228037;
--color-positive-transparent-1: rgba(24, 204, 81, 0.48);
--color-positive-transparent-2: rgba(24, 204, 81, 0.24);
--color-positive-transparent-3: rgba(24, 204, 81, 0.12);
}

// ----- Dark Theme Colors (IDE Only) -----
.replit-ui-theme-root.dark {
--color-background-1: #1d2333;
--color-background-2: #171d2d;
--color-background-3: #0e1525;
--color-control-1: #313646;
--color-control-2: #2b3140;
--color-control-3: #262b3b;
--color-border: #313646;
--color-foreground-1: #e1e2e4;
--color-foreground-2: #90939c;
--color-foreground-3: #696d78;
--color-foreground-4: #4e525f;
--color-foreground-transparent-1: rgba(14, 21, 37, 0.48);
--color-foreground-transparent-2: rgba(14, 21, 37, 0.24);
--color-foreground-transparent-3: rgba(14, 21, 37, 0.12);
--color-primary-1: #3485e4;
--color-primary-2: #337bd2;
--color-primary-3: #3273c4;
--color-primary-4: #316cb8;
--color-primary-transparent-1: rgba(52, 133, 228, 0.48);
--color-primary-transparent-2: rgba(52, 133, 228, 0.24);
--color-primary-transparent-3: rgba(52, 133, 228, 0.12);
--color-negative-1: #ff491c;
--color-negative-2: #eb451b;
--color-negative-3: #db411b;
--color-negative-4: #cd3e1a;
--color-negative-transparent-1: rgba(255, 73, 28, 0.48);
--color-negative-transparent-2: rgba(255, 73, 28, 0.24);
--color-negative-transparent-3: rgba(255, 73, 28, 0.12);
--color-warning-1: #f26702;
--color-warning-2: #de5f07;
--color-warning-3: #ce590a;
--color-warning-4: #c0540c;
--color-warning-transparent-1: rgba(242, 103, 2, 0.48);
--color-warning-transparent-2: rgba(242, 103, 2, 0.24);
--color-warning-transparent-3: rgba(242, 103, 2, 0.12);
--color-positive-1: #20ab46;
--color-positive-2: #219d41;
--color-positive-3: #22923d;
--color-positive-4: #22883a;
--color-positive-transparent-1: rgba(24, 204, 81, 0.48);
--color-positive-transparent-2: rgba(24, 204, 81, 0.24);
--color-positive-transparent-3: rgba(24, 204, 81, 0.12);
}
```

# wheels

Simple tire calculator

## Overview

**wheels** is a tire calculator application written in React.

The user can compare multiple tire specifications, which are found in the following form:

  ```
  Section Width / Aspect Ratio - Wheel Diameter
  ```

Each value number is defined thusly:

 - **`Section Width`** - width of the tire, as measured from the inner sidewall to the outer sidewall, in millimeters
 - **`Aspect Ratio`** - representative of the ratio of the sidewall height to the width
 - **`Wheel Diameter`** - diameter of the wheel, in inches

The application then calculates the following values:

 - **`Sidewall Height`** - height of the tire sidewall, in inches
 - **`Total Radius`** - combined radius of the wheel and tire, in inches
 - **`Total Diameter`** - combined diameter of the wheel and tire, in inches
 - **`Total Circumference`** - combined circumference of the wheel and tire, in inches
 - **`Revolutions per Mile`** - number of times the tire revolves over the distance of a mile

Formulae for the calculations are listed below.

**`Sidewall Height`**
```
( Aspect Ratio / 100 ) * ( Section Width / 25.4 )
```

**`Total Radius`**
```
( Wheel Diameter / 2 ) + Sidewall Height
```

**`Total Diameter`**
```
Total Radius * 2
```

**`Total Circumference`**
```
Total Radius * 2π
```

**`Revolutions per Mile`**
```
63360 / Total Circumference
```


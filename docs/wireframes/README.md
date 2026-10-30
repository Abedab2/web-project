# Wireframes

One image per screen, for desktop (1280 px wide) and mobile (390 px wide, inside a phone frame):

| Screen | Desktop | Mobile |
|--------|---------|--------|
| 1. Home | `01-home.png` | `01-home-mobile.png` |
| 2. Find Groups | `02-find-groups.png` | `02-find-groups-mobile.png` |
| 3. Group Details | `03-group-details.png` | `03-group-details-mobile.png` |
| 4. Create Group (form) | `04-create-group.png` | `04-create-group-mobile.png` |
| 5. My Groups | `05-my-groups.png` | `05-my-groups-mobile.png` |

These images are also embedded in section 6 of `../Exercise1-Project-Approval.docx`.

## Editing the wireframes

The wireframes are drawn as plain HTML pages in [`source/`](source). Shared colors, buttons, cards and form fields live in `source/wireframe.css`, so the five screens stay consistent.

To change a screen:
1. Edit its `.html` file and open it in a browser to check it.
2. Take a new screenshot and replace the matching `.png`.
3. Replace the image in the Word document.

These pages are only drawings for planning; the real app will be built in React.

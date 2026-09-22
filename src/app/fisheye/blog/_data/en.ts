export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export interface ArticleSet {
  [slug: string]: Article;
}

export const enArticles: ArticleSet = {
  "how-to-get-fisheye-effect-on-iphone": {
    slug: "how-to-get-fisheye-effect-on-iphone",
    title: "How to Get a Fisheye Effect on iPhone (No Lens Attachment)",
    description:
      "You don't need a clip-on lens to shoot fisheye photos and videos on iPhone. Here's how the effect works and how to get it directly in-camera.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>The fisheye look — that curved, ultra-wide distortion where straight lines bow outward from the center — used to mean buying a clip-on lens that clamped over your phone's camera. It worked, but it was one more thing to carry, easy to misalign, and it physically limited you to whatever field of view that specific lens hardware produced.</p>

<h2>What actually creates the fisheye look</h2>
<p>Fisheye distortion comes from an ultra-wide field of view combined with barrel distortion — straight lines near the edge of the frame curve outward, while the center stays relatively undistorted. Physical lenses do this optically. A well-built software version does it computationally, processing the live camera feed in real time before you shoot.</p>

<h2>Why software beats a clip-on lens</h2>
<p>A clip-on lens is fixed — one strength, one field of view, and it has to be physically attached and aligned correctly every time you want the shot. A software fisheye camera lets you preview the effect live, adjust the strength before you capture, and switch it off instantly for a normal shot, all without touching anything on the outside of your phone.</p>

<h2>Getting the effect on iPhone</h2>
<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Fisheye Camera - WideEye</a> gives you a live fisheye viewfinder with selectable lens strengths, so you see exactly how the shot will look before you tap the shutter — for both photos and video.</p>

<h2>Where the look works best</h2>
<p>Skate and BMX clips, where the exaggerated perspective adds speed and scale. Room tours and interiors, where the ultra-wide view fits more of the space in frame. Product shots that want a punchy, stylized look instead of a flat, standard angle. Street photography and travel shots where a distorted wide angle makes an ordinary scene feel more dynamic.</p>

<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Get Fisheye Camera - WideEye on the App Store</a> and shoot the effect live, no attachment required.</p>
`,
  },
  "fisheye-vs-wide-angle-difference": {
    slug: "fisheye-vs-wide-angle-difference",
    title: "Fisheye vs Wide-Angle: What's the Actual Difference?",
    description:
      "Both get more of the scene in frame, but fisheye and wide-angle produce very different looks. Here's how to tell them apart and when to use each.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Wide-angle and fisheye both widen your field of view, which is exactly why people mix them up — but the images they produce look nothing alike once you know what to look for.</p>

<h2>Wide-angle: more scene, straight lines</h2>
<p>A wide-angle lens (or your iPhone's native ultra-wide camera) captures more of the scene while keeping straight lines mostly straight — a wall stays a straight vertical line even at the edge of the frame. It corrects, or at least minimizes, the distortion that comes from packing more field of view into the shot.</p>

<h2>Fisheye: more scene, curved lines</h2>
<p>Fisheye leans into the distortion instead of correcting it. The field of view is often even wider than a standard wide-angle lens, but straight lines near the edges bow outward into curves, and the whole frame can take on a rounded, bubble-like quality. That curvature is the entire visual signature of the fisheye look — without it, it's just a wide shot.</p>

<h2>Choosing between them</h2>
<p>Wide-angle is the right call when you want to fit more in frame without anyone noticing the lens — real estate photos, landscapes, group shots where straight walls and horizons need to stay straight. Fisheye is the right call when the distortion itself is the point — action sports, music videos, stylized selfies, or any shot that wants to feel exaggerated and energetic rather than neutral.</p>

<h2>Getting real fisheye, not just "wide"</h2>
<p>Many camera apps labeled "wide" are actually just using the phone's ultra-wide lens without adding any curvature — that's wide-angle, not fisheye. <a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Fisheye Camera - WideEye</a> applies the actual barrel distortion live, so what you shoot is genuinely fisheye, not just a wider crop.</p>

<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Download Fisheye Camera - WideEye</a> and see the real difference for yourself.</p>
`,
  },
  "best-fisheye-camera-app-iphone": {
    slug: "best-fisheye-camera-app-iphone",
    title: "Best Fisheye Camera App for iPhone in 2026",
    description:
      "Skip the clip-on lens. Here's what to actually look for in a fisheye camera app, and why a live, adjustable preview matters more than most people realize.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Fisheye camera apps range from genuinely good to barely more than a filter slapped on a normal photo after the fact. The difference between them comes down to a few specific things worth checking before you rely on one for real shots.</p>

<h2>Live preview, not a post-shot filter</h2>
<p>The single biggest quality signal is whether the fisheye effect shows up in the viewfinder before you shoot, or only gets applied afterward as a filter. A live preview means you can actually frame the shot with the distortion in mind — a filter applied after the fact means you're guessing how the final image will look while you're composing it.</p>

<h2>Adjustable lens strength</h2>
<p>A single fixed fisheye strength is limiting. Being able to dial the intensity up for a dramatic, bubble-like look or down for a subtler wide-angle-with-curve effect means one app covers a lot more use cases than a one-setting fisheye filter.</p>

<h2>Works for both photo and video</h2>
<p>A lot of fisheye apps are photo-only, which is a real gap if you're shooting action clips, skate footage, or short-form video content where the fisheye look is arguably even more common than in stills.</p>

<h2>What to actually look for</h2>
<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Fisheye Camera - WideEye</a> covers all three: a live fisheye viewfinder for both photo and video, selectable lens strengths, and instant capture with the distortion baked in at shoot time, not added afterward.</p>

<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Get Fisheye Camera - WideEye on the App Store</a> and shoot the real thing instead of a filtered approximation.</p>
`,
  },
  "fisheye-photography-tips-beginners": {
    slug: "fisheye-photography-tips-beginners",
    title: "5 Fisheye Photography Tips for Beginners",
    description:
      "Fisheye is an easy effect to get and a harder one to get right. A few practical tips make the difference between a gimmicky shot and a genuinely great one.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Fisheye is one of the most immediately eye-catching effects in photography, and also one of the easiest to overuse or misuse. A handful of practical habits separate shots that feel intentional from ones that just look like a filter was switched on.</p>

<h2>1. Center your subject</h2>
<p>Distortion is mildest at the center of the frame and most extreme at the edges. Keeping your main subject near the middle keeps them looking natural while the surrounding environment gets the dramatic curve — that contrast is usually what makes a fisheye shot work.</p>

<h2>2. Get closer than feels natural</h2>
<p>Because fisheye packs in such a wide field of view, subjects that look properly framed through a normal lens often end up tiny and lost in a fisheye shot. Moving in closer than instinct suggests usually produces a much stronger composition.</p>

<h2>3. Use straight lines on purpose</h2>
<p>Floors, ceilings, doorways, and horizons all curve dramatically under fisheye distortion. Instead of avoiding them, frame shots that include these lines deliberately — a hallway or a skate ramp under fisheye can look far more dynamic than the same scene shot normally.</p>

<h2>4. Watch your own limbs and gear</h2>
<p>The extreme field of view means your own hands, feet, or camera rig can creep into frame more easily than you'd expect. A quick check of the live preview before shooting avoids the classic beginner mistake of an accidental hand in the corner of the shot.</p>

<h2>5. Adjust the strength to match the scene</h2>
<p>Not every shot needs maximum distortion. A lighter fisheye setting can add energy to a shot without tipping into obviously gimmicky territory, while full strength suits action shots and close-up selfies better.</p>

<h2>Practicing with a live preview</h2>
<p>All five of these tips depend on being able to see the distortion before you shoot, not after. <a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Fisheye Camera - WideEye</a> shows the effect live with adjustable strength, so you can apply these tips in real time instead of reshooting after checking the result.</p>

<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Download Fisheye Camera - WideEye</a> and start practicing with a real-time fisheye viewfinder.</p>
`,
  },
  "fisheye-for-skate-and-action-clips": {
    slug: "fisheye-for-skate-and-action-clips",
    title: "Why Fisheye Is the Go-To Look for Skate and Action Clips",
    description:
      "Skate videos have used fisheye for decades, and it's not just tradition — the distortion genuinely serves the footage. Here's why, and how to shoot it on iPhone.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Skate videos have leaned on fisheye lenses since the 1980s, and while part of that is genre tradition, the look sticks around because it genuinely serves the footage in ways a standard lens doesn't.</p>

<h2>It exaggerates speed and scale</h2>
<p>Fisheye's curved perspective makes obstacles look bigger, gaps look longer, and motion look faster than a normal lens would show. A trick that looks routine through a standard camera can look genuinely massive through a fisheye one — which is exactly the effect skate filmers have chased for decades.</p>

<h2>It fits the whole trick in frame, close up</h2>
<p>Skate filming usually means being physically close to the action — often just a few feet away. A standard lens at that distance can't fit the skater, the obstacle, and the landing all in frame at once. Fisheye's extreme field of view solves that specific problem, letting the filmer stay close while still capturing the entire trick.</p>

<h2>It works for more than skating</h2>
<p>The same reasoning applies to BMX, parkour, and any close-quarters action footage where a filmer needs to be near the subject but still capture the full scene. The genre-specific look has become a general shorthand for raw, high-energy action content.</p>

<h2>Getting that look without a rig</h2>
<p>Traditional skate filming used dedicated fisheye camcorders or DSLR rigs with clip-on lenses — heavy, expensive setups built around one lens. <a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Fisheye Camera - WideEye</a> gets the same live, distorted wide-angle look straight from an iPhone, with adjustable lens strength and a real-time preview so you can frame the shot exactly like a dedicated fisheye rig would, without carrying one.</p>

<p><a href="https://apps.apple.com/app/fisheye-camera-wideeye/id6760895260">Get Fisheye Camera - WideEye on the App Store</a> and shoot action footage with the look the genre actually calls for.</p>
`,
  },
};

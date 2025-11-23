@@ .. @@
                 <ul className="space-y-2">
                   {service.keywords.map((keyword, idx) => (
                   )
                   )
                   }
-                    <li key={idx} className="flex items-center gap-2 text-therapy-sand-600 text-sm">
+                    <li key={idx} className="flex items-start gap-2 text-therapy-sand-600 text-sm">
                       <Leaf className="text-therapy-sage-500 flex-shrink-0" size={14} />
                       <span>{keyword}</span>
                     </li>
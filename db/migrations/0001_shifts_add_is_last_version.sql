ALTER TABLE `shifts` ADD `is_last_version` boolean NOT NULL AFTER `version`;
--> statement-breakpoint
CREATE INDEX `is_last_version_idx` ON `shifts` (`is_last_version`);
--> statement-breakpoint
update `shifts` set `is_last_version` = false;
--> statement-breakpoint
update `shifts`
set `is_last_version` = true
where (`date`, `version`) in (select `date`, max(`version`)
                              from (select * from `shifts`) as `shifts`
                              group by date);

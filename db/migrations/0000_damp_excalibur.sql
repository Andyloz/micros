CREATE TABLE `brothers` (
	`id` int unsigned NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `brothers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brothers_shifts` (
	`brother_id` int unsigned NOT NULL,
	`shift_date` date NOT NULL,
	`shift_version` int unsigned NOT NULL,
	CONSTRAINT `brothers_shifts_brother_id_shift_date_shift_version_pk` PRIMARY KEY(`brother_id`,`shift_date`,`shift_version`)
);
--> statement-breakpoint
CREATE TABLE `shifts` (
	`date` date NOT NULL,
	`version` int unsigned NOT NULL DEFAULT 1,
	`week_date` date NOT NULL,
	`type` enum('midweek','weekend','other') NOT NULL,
	`description` text,
	CONSTRAINT `shifts_date_version_pk` PRIMARY KEY(`date`,`version`)
);
--> statement-breakpoint
ALTER TABLE `brothers_shifts` ADD CONSTRAINT `brothers_shifts_brother_id_brothers_id_fk` FOREIGN KEY (`brother_id`) REFERENCES `brothers`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `brothers_shifts` ADD CONSTRAINT `brothers_shifts_shift_date_shift_version_shifts_date_version_fk` FOREIGN KEY (`shift_date`,`shift_version`) REFERENCES `shifts`(`date`,`version`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `week_date_idx` ON `shifts` (`week_date`);